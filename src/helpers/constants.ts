import { StatusType } from 'api/Models';

export const STUDENT_STATUS_TAG_CLASS = {
    [StatusType.Accepted]: 'lp-tag_blue',
    [StatusType.Issued]: 'lp-tag_yellow',
    [StatusType.Interview]: 'lp-tag_green',
    [StatusType.Refused]: 'lp-tag_grey',
    [StatusType.Empty]: 'lp-tag_black',
};

export const STUDENT_STATUS_LABEL = {
    [StatusType.Accepted]: 'оффер принят',
    [StatusType.Issued]: 'оффер',
    [StatusType.Interview]: 'собеседование',
    [StatusType.Refused]: 'отказ',
    [StatusType.Empty]: 'без собесов',
};
