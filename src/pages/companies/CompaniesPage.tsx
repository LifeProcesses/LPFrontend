import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

import React from 'react';

import { useGetCompaniesListQuery } from 'api/routes/companiesApi';

import './CompaniesPage.scss';

const CompaniesPage: React.FC = () => {
    const { data } = useGetCompaniesListQuery();

    return (
        <>
            <div>Найдено комапний: 10</div>
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
                dataSource={data?.companies}
                // footer={
                //     <div>
                //         <b>ant design</b> footer part
                //     </div>
                // }
                renderItem={(item) => (
                    <List.Item
                        // key={item.title}
                        // actions={[
                        //     <IconText icon={StarOutlined} text='156' key='list-vertical-star-o' />,
                        //     <IconText icon={LikeOutlined} text='156' key='list-vertical-like-o' />,
                        //     <IconText icon={MessageOutlined} text='2' key='list-vertical-message' />,
                        // ]}
                        extra={<div className='label'>"qwqw"</div>}
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
        </>
    );
};

export default CompaniesPage;
