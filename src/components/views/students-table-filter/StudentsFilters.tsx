import { Input, Select, Tag } from 'antd';

import { useMemo, useState } from 'react';

import { STUDENT_STATUS_LABEL } from 'helpers/constants';
import { COMPANIES_MOCK } from 'helpers/mocks/Companies.mock';
import { POSITIONS_MOCK } from 'helpers/mocks/Positions.mock';

import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

import './StudentsFilters.scss';

const StudentsFilters: React.FC = () => {
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);
    const [selectedPositions, setSelectedPositions] = useState<number[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

    const companiesOptions = useMemo(
        () =>
            COMPANIES_MOCK.companies
                .filter((company) => !selectedCompanies.includes(company.id))
                .map((company) => ({
                    value: company.id,
                    label: company.name,
                })),
        [selectedCompanies],
    );

    const positionsOptions = useMemo(
        () =>
            POSITIONS_MOCK.positions
                .filter((position) => !selectedPositions.includes(position.id))
                .map((position) => ({
                    value: position.id,
                    label: position.name,
                })),
        [selectedPositions],
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
            <Input placeholder='Поиск' className='students-filters__search' />
            <div className='filter-wrapper'>
                <label>Компания</label>
                <Select
                    mode='multiple'
                    allowClear
                    tagRender={tagRender}
                    onChange={setSelectedCompanies}
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
                    onChange={setSelectedPositions}
                    options={positionsOptions}
                    // maxTagCount='responsive'
                    optionFilterProp='label'
                />
            </div>
            <div className='filter-wrapper'>
                <label>Статус</label>
                <Select
                    mode='multiple'
                    allowClear
                    tagRender={tagRender}
                    onChange={setSelectedStatuses}
                    options={statusesOptions}
                    optionFilterProp='label'
                />
            </div>
        </div>
    );
};

export default StudentsFilters;
