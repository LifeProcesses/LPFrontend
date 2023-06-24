import { Avatar, Drawer, Select } from 'antd';

import { useMemo, useState } from 'react';

import CreateInterviewForm from './create-interview-form/CreateInterviewForm';
import StudentInterview from './student-interview/StudentInterview';
import { StudentCardProps } from './StudentCard.interface';

import { tagRender } from 'components/shared/selectTag/SelectTag';
import { STUDENT_STATUS_LABEL } from 'helpers/constants';

import './StudentCard.scss';

const StudentCard: React.FC<StudentCardProps> = ({ student, isOpen, onClose, isLoading }) => {
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

    const filteredInterviews = useMemo(() => {
        if (!selectedStatuses.length) {
            return student?.interviews;
        }

        return student?.interviews.filter((interview) => selectedStatuses.includes(interview.status));
    }, [selectedStatuses, student?.interviews]);

    return (
        <Drawer
            placement='right'
            contentWrapperStyle={{ width: 'min(35%, 700px)' }}
            closable={false}
            onClose={onClose}
            open={isOpen}
            bodyStyle={{ padding: '55px 30px 0' }}
        >
            {!student ? (
                <p>Smth went wrong</p>
            ) : (
                <div className='student-card'>
                    <div className='student-card__info'>
                        <Avatar
                            src={student.image && <img src={student.image} alt='avatar' />}
                            size={80}
                            style={{ marginRight: '17px' }}
                        />
                        <div>
                            <p className='student-card__info_name'>{student.name}</p>
                            <p>{student.position}</p>
                        </div>
                    </div>
                    <div className='student-card__control'>
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
                        <div style={{ flexGrow: 1 }}></div>
                        <CreateInterviewForm />
                    </div>
                    <p>Найдено позиций: {filteredInterviews?.length}</p>
                    {filteredInterviews?.map((interview) => (
                        <StudentInterview interview={interview} key={interview.id} />
                    ))}
                </div>
            )}
        </Drawer>
    );
};

export default StudentCard;
