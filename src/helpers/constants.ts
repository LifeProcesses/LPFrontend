import { StatusType } from './types';

export const STUDENT_STATUS_TAG_CLASS = {
    [StatusType.Accepted]: 'lp-tag_blue',
    [StatusType.Issued]: 'lp-tag_yellow',
    [StatusType.Interview]: 'lp-tag_green',
    [StatusType.Refused]: 'lp-tag_grey',
    [StatusType.Empty]: 'lp-tag_black',
};

export const STUDENT_STATUS_LABEL = {
    [StatusType.Accepted]: 'Оффер принят',
    [StatusType.Issued]: 'Оффер',
    [StatusType.Interview]: 'Собеседование',
    [StatusType.Refused]: 'Отказ',
    [StatusType.Empty]: 'Без собесов',
};

// export const STUDENT_STATUS_OPTIONS = STUDENT_STATUS_LABEL.map((status) => (
//     {

//     }
// ))
