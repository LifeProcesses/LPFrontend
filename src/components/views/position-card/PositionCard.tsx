import { Drawer, Select, Table, Tag } from 'antd';
import moment from 'moment';
import { useMemo, useState } from 'react';

import { PositionCardProps } from './PositionCard.interface';

import { CompanyPositionStudentPayload } from 'api/Models';

import AppAvatar from 'components/shared/AppAvatar';
import { tagRender } from 'components/shared/selectTag/SelectTag';
import { STUDENT_STATUS_LABEL, STUDENT_STATUS_TAG_CLASS } from 'helpers/constants';
import { COMPANY_POSITION_STUDENTS_MOCK } from 'helpers/mocks/Companies.mock';

import type { ColumnsType } from 'antd/es/table';

import './PositionCard.scss';

const PositionCard: React.FC<PositionCardProps> = ({ isFirstPosition, position, isOpen, onClose, onClickStudent }) => {
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

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

    const filteredStudents = useMemo(() => {
        const students = isFirstPosition ? COMPANY_POSITION_STUDENTS_MOCK : position?.students || [];
        if (!selectedStatuses.length) {
            return students;
        }

        return students.filter((student) => selectedStatuses.includes(student.status));
    }, [isFirstPosition, position?.students, selectedStatuses]);

    const columns: ColumnsType<CompanyPositionStudentPayload> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: (_, { studentId: id, name, image }) => (
                <div className='student-name' onClick={() => onClickStudent(id)}>
                    <AppAvatar src={image} style={{ marginRight: '17px' }} />
                    <span>{name}</span>
                </div>
            ),
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status }) => (
                <Tag className={`lp-tag ${STUDENT_STATUS_TAG_CLASS[status]}`}>
                    {STUDENT_STATUS_LABEL[status].toLowerCase()}
                </Tag>
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
        <Drawer
            placement='right'
            contentWrapperStyle={{ width: 'min(50%, 700px)' }}
            closable={false}
            onClose={onClose}
            open={isOpen}
            bodyStyle={{ padding: '55px 30px 0' }}
        >
            {!position ? (
                <p>Smth went wrong</p>
            ) : (
                <div className='position-card'>
                    <div className='position-card__title'>
                        <span>{position.name}</span>
                        <Tag className={`lp-tag lp-tag_yellow`}>
                            план {position.plan} | взяли {position.taken}
                        </Tag>
                    </div>
                    <div className='position-card__control'>
                        <label>Статус</label>
                        <Select
                            mode='multiple'
                            allowClear
                            tagRender={tagRender}
                            onChange={setSelectedStatuses}
                            options={statusesOptions}
                            optionFilterProp='label'
                            placeholder='Все'
                        />
                    </div>
                    <div className='position-card__table'>
                        <p>Найдено студентов: {filteredStudents?.length || 0}</p>
                        <Table
                            columns={columns}
                            dataSource={filteredStudents}
                            pagination={{ hideOnSinglePage: true }}
                        />
                    </div>
                </div>
            )}
        </Drawer>
    );
};

export default PositionCard;
