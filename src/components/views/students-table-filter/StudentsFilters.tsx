import { Input, Select } from 'antd';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { FilterTagComponent } from 'components/shared/selectTag/SelectTag';
import { STUDENT_STATUS_LABEL } from 'helpers/constants';

import { StudentStatusType } from 'helpers/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { setFilters } from 'store/reducers/studentsSlice';

import './StudentsFilters.scss';

const StudentsFilters: React.FC = () => {
    const dispatch = useAppDispatch();

    const { companies, positions } = useAppSelector((store) => store.students);

    const [filteredName, setFilteredName] = useState<string>('');
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);
    const [selectedPositions, setSelectedPositions] = useState<number[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

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
            handleFilter();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCompanies, selectedPositions, selectedStatuses]);

    const handleFilter = useCallback(() => {
        dispatch(
            setFilters({
                ...(filteredName.length && { name: filteredName }),
                ...(selectedCompanies.length && { companies: selectedCompanies }),
                ...(selectedPositions.length && { positions: selectedPositions }),
                ...(selectedStatuses.length && { statuses: selectedStatuses }),
            }),
        );
    }, [dispatch, filteredName, selectedCompanies, selectedPositions, selectedStatuses]);

    return (
        <div className='students-filters'>
            <Input
                value={filteredName}
                onChange={(e) => setFilteredName(e.target.value)}
                placeholder='Поиск'
                className='students-filters__search'
            />
            <div className='students-filters__filters'>
                {selectedCompanies.map((company) => (
                    <FilterTagComponent
                        key={company}
                        label={`Компания: ${companies.find((comp) => comp.id === company)?.name || ''}`}
                        onClose={() => {
                            setSelectedCompanies((prev) => prev.filter((comp) => comp !== company));
                        }}
                    />
                ))}
                {selectedPositions.map((position) => (
                    <FilterTagComponent
                        key={position}
                        label={`Позиция: ${positions.find((pos) => pos.id === position)?.name || ''}`}
                        onClose={() => {
                            setSelectedPositions((prev) => prev.filter((pos) => pos !== position));
                        }}
                    />
                ))}
                {selectedStatuses.map((status) => (
                    <FilterTagComponent
                        key={status}
                        label={`Статус: ${STUDENT_STATUS_LABEL[status as StudentStatusType]}`}
                        onClose={() => {
                            setSelectedStatuses((prev) => prev.filter((stat) => stat !== status));
                        }}
                    />
                ))}
            </div>
            <div className='students-filters__select'>
                <div className='filter-wrapper'>
                    <label>Компания</label>
                    <Select
                        mode='multiple'
                        value={selectedCompanies}
                        tagRender={() => <></>}
                        onChange={(val, option) => {
                            setSelectedCompanies(val);
                        }}
                        options={companiesOptions}
                        optionFilterProp='label'
                    />
                </div>
                <div className='filter-wrapper'>
                    <label>Позиция</label>
                    <Select
                        mode='multiple'
                        value={selectedPositions}
                        tagRender={() => <></>}
                        onChange={(val) => {
                            setSelectedPositions(val);
                        }}
                        options={positionsOptions}
                        optionFilterProp='label'
                    />
                </div>
                <div className='filter-wrapper'>
                    <label>Статус</label>
                    <Select
                        mode='multiple'
                        value={selectedStatuses}
                        tagRender={() => <></>}
                        onChange={(val) => {
                            setSelectedStatuses(val);
                        }}
                        options={statusesOptions}
                        optionFilterProp='label'
                    />
                </div>
                <div style={{ flex: 1 }}></div>
            </div>
        </div>
    );
};

export default StudentsFilters;
