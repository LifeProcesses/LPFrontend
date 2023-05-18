import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Input, List, Select, Space, Tag } from 'antd';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useGetCompaniesListQuery } from 'api/routes/companiesApi';

import './CompaniesPage.scss';

import { COMPANIES_MOCK } from 'helpers/mocks/Companies.mock';

import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

const CompaniesPage: React.FC = () => {
    const navigate = useNavigate();

    const [selectedPositions, setSelectedPositions] = useState<number[]>([]);
    const [filteredName, setFilteredName] = useState<string>('');

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

    const data = COMPANIES_MOCK.companies.filter((company)=>(company.name.toLocaleLowerCase().includes(filteredName)))

    return (
        <div className='companies-page'>
        {/* <div className='filter-wrapper'>
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
            </div> */}
            <Input
                value={filteredName}
                onChange={(e) => setFilteredName(e.target.value.toLocaleLowerCase())}
                placeholder='Поиск'
                className='students-filters__search'
            />
            <div>Найдено комапний: {data.length}</div>
            <List
                className='list'
                itemLayout='vertical'
                size='large'
                // pagination={{
                //     onChange: (page) => {
                //         console.log(page);
                //     },
                //     pageSize: 3,
                // }}
                dataSource={data}
                // footer={
                //     <div>
                //         <b>ant design</b> footer part
                //     </div>
                // }
                renderItem={(item) => (
                    <List.Item
                        className='list_item'
                        key={item.name}
                        onClick={
                            ()=>{  navigate(`${item.id}`)}
                        }
                        // actions={[
                        //     <IconText icon={StarOutlined} text='156' key='list-vertical-star-o' />,
                        //     <IconText icon={LikeOutlined} text='156' key='list-vertical-like-o' />,
                        //     <IconText icon={MessageOutlined} text='2' key='list-vertical-message' />,
                        // ]}
                        extra={
                        // <div className='label'>"qwqw"</div>
                        <Tag className={`lp-tag lp-tag_yellow`}>
                            <div>План {item.plan} | Взяли {item.taken}</div>
                    </Tag>
                    }
                    >
                        {/* <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                /> */}
                        {item.name}
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CompaniesPage;
