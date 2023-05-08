import { StatusType } from 'api/Models';

export const STUDENT_STATUS_COLOR = {
    [StatusType.Accepted]: '#1541e4',
    [StatusType.Issued]: '#ffd72c',
    [StatusType.Interview]: '#15e31b',
    [StatusType.Refused]: '#444544',
    [StatusType.Empty]: '#000000',
};
