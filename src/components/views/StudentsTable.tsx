import { Table, Tag } from 'antd';

import moment from 'moment';

import { STUDENTS_MOCK } from '../../helpers/mocks/Students.mock';

import { StudentPayload } from 'api/Models';

import { STUDENT_STATUS_LABEL, STUDENT_STATUS_TAG_CLASS } from 'helpers/constants';

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
            render: (_, { status }) => (
                <Tag className={`lp-tag ${STUDENT_STATUS_TAG_CLASS[status.type]}`}>
                    {STUDENT_STATUS_LABEL[status.type]}
                </Tag>
            ),
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

    return <Table columns={columns} dataSource={STUDENTS_MOCK.students} />;
};

export default StudentsTable;
