import { Avatar, Table, Tag } from 'antd';

import moment from 'moment';

import { StudentPayload } from 'api/Models';

import { STUDENT_STATUS_LABEL, STUDENT_STATUS_TAG_CLASS } from 'helpers/constants';
import { useAppSelector } from 'hooks/useAppSelector';

import type { ColumnsType } from 'antd/es/table';

import './StudentsTable.scss';

const StudentsTable: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const { filteredStudents: students } = useAppSelector((store) => store.students);

    const columns: ColumnsType<StudentPayload> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: (_, { name, image }) => (
                <div className='student-name'>
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
                        {STUDENT_STATUS_LABEL[status.type].toLowerCase()}
                        <span>{!!status.number && ` (${status.number})`}</span>
                    </Tag>
                    {!!interviewsCount && <p className='cell-wrapper__total'>Всего вакансий: {interviewsCount}</p>}
                </div>
            ),
        },
        {
            title: 'Компании',
            dataIndex: 'companies',
            key: 'companies',
            render: (_, { companies }) => (
                <div className='cell-wrapper'>
                    {companies.slice(0, 2).map((company, i) => (
                        <p key={i}>{company.name}</p>
                    ))}
                    {companies.length > 2 && <p className='cell-wrapper__total'>Всего: {companies.length}</p>}
                </div>
            ),
        },
        {
            title: 'Позиции',
            key: 'positions',
            dataIndex: 'positions',
            render: (_, { positions }) => (
                <div className='cell-wrapper'>
                    {positions.slice(0, 2).map((position, i) => (
                        <p key={i}>{position.name}</p>
                    ))}
                    {positions.length > 2 && <p className='cell-wrapper__total'>Всего: {positions.length}</p>}
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

    return (
        <>
            <div>
                <span>Найдено студентов: {students.length}</span>
                <button>Очистить фильтр</button>
            </div>
            <Table columns={columns} dataSource={students} loading={isLoading} />
        </>
    );
};

export default StudentsTable;
