import { Table, Tag } from 'antd';

import moment from 'moment';

import { StudentPayload } from 'api/Models';

import { STUDENT_STATUS_COLOR } from 'helpers/constants';

import type { ColumnsType } from 'antd/es/table';

const StudentsTable: React.FC = () => {
    const columns: ColumnsType<StudentPayload> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status }) => <Tag color={STUDENT_STATUS_COLOR[status.type]}>{status.type}</Tag>,
        },
        {
            title: 'Компании',
            dataIndex: 'companies',
            key: 'companies',
            render: (_, { companies }) => (
                <>
                    {companies.map((company) => (
                        <p>{company.name}</p>
                    ))}
                </>
            ),
        },
        {
            title: 'Позиции',
            key: 'positions',
            dataIndex: 'positions',
            render: (_, { positions }) => (
                <>
                    {positions.map((position) => (
                        <p>{position.name}</p>
                    ))}
                </>
            ),
        },
        {
            title: 'Активность',
            key: 'lastActivity',
            dataIndex: 'lastActivity',
            render: (_, { lastActivity }) => <span>{moment(lastActivity).fromNow()}</span>,
        },
    ];

    return <Table columns={columns} dataSource={data} />;
};

export default StudentsTable;
