import { Input, Select, Tag } from 'antd';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { STUDENT_STATUS_LABEL } from 'helpers/constants';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { setFilters } from 'store/reducers/studentsSlice';

import type { BaseSelectRef } from 'rc-select';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

import './StudentsFilters.scss';

// const { Option } = Select;

const StudentsFilters: React.FC = () => {
    const dispatch = useAppDispatch();

    const { companies, positions } = useAppSelector((store) => store.students);

    const [filteredName, setFilteredName] = useState<string>('');
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);
    const [selectedPositions, setSelectedPositions] = useState<number[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

    const selectRef = useRef<BaseSelectRef>(null);

    const companiesOptions = useMemo(
        () =>
            companies
                .filter((company) => !selectedCompanies.includes(company.id))
                .map((company) => ({
                    value: company.id,
                    label: company.name,
                })),
        [companies, selectedCompanies],
    );

    const positionsOptions = useMemo(
        () =>
            positions
                .filter((position) => !selectedPositions.includes(position.id))
                .map((position) => ({
                    value: position.id,
                    label: position.name,
                })),
        [positions, selectedPositions],
    );

    const statusesOptions = useMemo(
        () =>
            Object.entries(STUDENT_STATUS_LABEL)
                .filter((status) => !selectedStatuses.includes(status[0]))
                .map((status) => ({
                    value: status[0],
                    label: status[1],
                })),
        [selectedStatuses],
    );

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            handleFilter({});
        }, 500);

        return () => clearTimeout(delayDebounceFn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredName]);

    const handleFilter = useCallback(
        ({
            companies = selectedCompanies,
            positions = selectedPositions,
            statuses = selectedStatuses,
        }: {
            companies?: number[];
            positions?: number[];
            statuses?: string[];
        }) => {
            dispatch(
                setFilters({
                    ...(filteredName.length && { name: filteredName }),
                    ...(companies.length && { companies }),
                    ...(positions.length && { positions }),
                    ...(statuses.length && { statuses }),
                }),
            );
        },
        [dispatch, filteredName, selectedCompanies, selectedPositions, selectedStatuses],
    );

    const tagRender = ({ label, value, closable, onClose }: CustomTagProps) => {
        const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            event.stopPropagation();
            onClose();
        };
        return (
            <Tag onMouseDown={onPreventMouseDown} onClose={onClose} className='lp-tag lp-tag_filter'>
                {label}
            </Tag>
        );
    };

    return (
        <div className='students-filters'>
            <Input
                value={filteredName}
                onChange={(e) => setFilteredName(e.target.value)}
                placeholder='Поиск'
                className='students-filters__search'
            />
            <div className='filter-wrapper'>
                <label>Компания</label>
                <Select
                    ref={selectRef}
                    mode='multiple'
                    allowClear
                    tagRender={tagRender}
                    onChange={(val) => {
                        setSelectedCompanies(val);
                        handleFilter({ companies: val });
                    }}
                    options={companiesOptions}
                    optionFilterProp='label'
                />
            </div>
            <div className='filter-wrapper'>
                <label>Позиция</label>
                <Select
                    mode='multiple'
                    allowClear
                    tagRender={tagRender}
                    onChange={(val) => {
                        setSelectedPositions(val);
                        handleFilter({ positions: val });
                    }}
                    options={positionsOptions}
                    optionFilterProp='label'
                />
            </div>
            <div className='filter-wrapper'>
                <label>Статус</label>
                <Select
                    mode='multiple'
                    allowClear
                    tagRender={tagRender}
                    onChange={(val) => {
                        setSelectedStatuses(val);
                        handleFilter({ statuses: val });
                    }}
                    options={statusesOptions}
                    optionFilterProp='label'
                />
                {/* {statusesOptions.map((opt) => (
                        <Option value={opt.value} key={opt.value}>{opt.label}</Option>
                    ))} */}
                    <button onClick={() => setSelectedStatuses([])}></button>
            </div>
        </div>
    );
};

export default StudentsFilters;
