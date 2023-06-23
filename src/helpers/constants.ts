import { InterviewStatusType, StudentStatusType } from './types';

export const STUDENT_STATUS_TAG_CLASS = {
    [StudentStatusType.Accepted]: 'lp-tag_blue',
    [StudentStatusType.Issued]: 'lp-tag_yellow',
    [StudentStatusType.Interview]: 'lp-tag_green',
    [StudentStatusType.Refused]: 'lp-tag_grey',
    [StudentStatusType.Empty]: 'lp-tag_black',
};

export const STUDENT_STATUS_LABEL = {
    [StudentStatusType.Accepted]: 'Оффер принят',
    [StudentStatusType.Issued]: 'Оффер',
    [StudentStatusType.Interview]: 'Собеседование',
    [StudentStatusType.Refused]: 'Отказ',
    [StudentStatusType.Empty]: 'Без собесов',
};

export const INTERVIEW_STATUS_LABEL = {
    [InterviewStatusType.Accepted]: 'Оффер принят',
    [InterviewStatusType.Issued]: 'Оффер',
    [InterviewStatusType.Interview]: 'Собеседование',
    [InterviewStatusType.Refused]: 'Отказ',
};

// export const STUDENT_STATUS_OPTIONS = STUDENT_STATUS_LABEL.map((status) => (
//     {

//     }
// ))
