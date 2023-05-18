import { Avatar, Input, Tag } from 'antd';

import { useCallback, useMemo, useState } from 'react';

import { InterviewPayload } from 'api/Models';
import { useAddInterviewCommentMutation } from 'api/routes/studentsApi';

import { STUDENT_STATUS_LABEL, STUDENT_STATUS_TAG_CLASS } from 'helpers/constants';
import { getDateFromTimestamp, getTimeFromTimestamp } from 'helpers/timeFormatting';

import './StudentInterview.scss';

const StudentInterview: React.FC<{ interview: InterviewPayload }> = ({ interview }) => {
    const [sendComment] = useAddInterviewCommentMutation();

    const { company, position, status, comments } = interview;
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const [comment, setComment] = useState<string>('');

    const visibleComments = useMemo(() => {
        if (!isCollapsed) {
            return comments;
        } else {
            return comments.slice(0, 1);
        }
    }, [comments, isCollapsed]);

    const handleAddComment = useCallback(
        (text: string) => {
            console.log(text);
            // sendComment({
            //     companyId: company.id,
            //     interviewId: interview.id,
            //     text
            // })
            //     .unwrap()
            //     .catch((e) => {
            //         console.log('smth went wrong');
            //     });
            setComment('');
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [company.id, interview.id, sendComment],
    );

    return (
        <div className='student-interview'>
            <div className='student-interview__info'>
                <div>
                    <p>{company.name}</p>
                    <p>{position}</p>
                </div>
                <Tag className={`lp-tag ${STUDENT_STATUS_TAG_CLASS[status]}`}>
                    {STUDENT_STATUS_LABEL[status].toLowerCase()}
                </Tag>
            </div>
            <Input
                value={comment}
                onChange={(e) => {
                    setComment(e.currentTarget.value);
                }}
                onPressEnter={(e) => {
                    handleAddComment(e.currentTarget.value);
                }}
                placeholder='Комментарий'
                size='large'
                className='student-interview__input'
            />
            <div className='student-interview__comments'>
                {visibleComments.map((comment, i) => (
                    <div className='comment' key={i}>
                        <div className='comment_info'>
                            <Avatar src={comment.author.image} size={40} />
                            <span className='comment_info_name'>{comment.author.name}</span>
                            <div style={{ flexGrow: 1 }}></div>
                            <span className='comment_info_date'>
                                {getDateFromTimestamp(comment.timestamp.toString())}{' '}
                                {getTimeFromTimestamp(comment.timestamp.toString())}
                            </span>
                        </div>
                        <div className='comment_text'>{comment.text}</div>
                    </div>
                ))}
            </div>
            {comments.length > 1 && (
                <div onClick={() => setIsCollapsed(!isCollapsed)} className='student-interview__collapse-btn'>
                    {isCollapsed ? 'Развернуть комментарии' : 'Свернуть комментарии'}
                </div>
            )}
        </div>
    );
};

export default StudentInterview;
