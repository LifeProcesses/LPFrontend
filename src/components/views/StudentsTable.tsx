import { Avatar, Table, Tag } from 'antd';

import moment from 'moment';

import { StudentPayload } from 'api/Models';

import { STUDENT_STATUS_LABEL, STUDENT_STATUS_TAG_CLASS } from 'helpers/constants';
import { STUDENTS_MOCK } from 'helpers/mocks/Students.mock';

import type { ColumnsType } from 'antd/es/table';

import './StudentsTable.scss';

const StudentsTable: React.FC = () => {
    const columns: ColumnsType<StudentPayload> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: (_, { name, image }) => (
                <div>
                    <Avatar src={image} style={{ marginRight: '17px' }} />
                    <span>{name}</span>
                </div>
            ),
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status, interviewsCount }) => (
                <div className='cell-wrapper cell-wrapper_status'>
                    <Tag className={`lp-tag ${STUDENT_STATUS_TAG_CLASS[status.type]}`}>
                        {STUDENT_STATUS_LABEL[status.type]}
                        <span>{!!status.number && ` (${status.number})`}</span>
                    </Tag>
                    {!!interviewsCount && <p>Всего вакансий: {interviewsCount}</p>}
                </div>
            ),
        },
        {
            title: 'Компании',
            dataIndex: 'companies',
            key: 'companies',
            render: (_, { companies }) => (
                <div className='cell-wrapper'>
                    {companies.map((company, i) => (
                        <p key={i}>{company.name}</p>
                    ))}
                </div>
            ),
        },
        {
            title: 'Позиции',
            key: 'positions',
            dataIndex: 'positions',
            render: (_, { positions }) => (
                <div className='cell-wrapper'>
                    {positions.map((position, i) => (
                        <p key={i}>{position.name}</p>
                    ))}
                </div>
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
