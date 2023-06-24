import { Input, List, Tag } from 'antd';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCompaniesListQuery } from 'api/routes/companiesApi';
import { COMPANIES_MOCK } from 'helpers/mocks/Companies.mock';

import './CompaniesList.scss';

const CompaniesList: React.FC = () => {
    const navigate = useNavigate();

    // const { data: companiesList, isLoading: isCompaniesLoading } = useGetCompaniesListQuery();
    // const { isLoading: isCompaniesLoading } = useGetCompaniesListQuery();
    const companiesList = COMPANIES_MOCK;

    const [filterValue, setFilterValue] = useState<string>('');

    const filteredCompanies = useMemo(() => {
        return companiesList?.filter((company) =>
            company.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()),
        );
    }, [companiesList, filterValue]);

    return (
        <div className='companies-list'>
            <Input
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder='Поиск'
                className='companies-list__search'
            />
            <span className='companies-list__info'>Найдено компаний: {filteredCompanies?.length || 0}</span>
            <List
                // loading={isCompaniesLoading}
                dataSource={filteredCompanies}
                renderItem={(item) => (
                    <List.Item>
                        <div
                            className='companies-list__item'
                            onClick={() => {
                                navigate(`${item.companyId}`);
                            }}
                        >
                            <span>{item.name}</span>
                            <Tag className={`lp-tag lp-tag_yellow`}>
                                план {item.plan} | взяли {item.taken}
                            </Tag>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CompaniesList;
