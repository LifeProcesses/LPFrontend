import { StudentInfoPayload, StudentsPayload } from 'api/Models';
import { StatusType } from 'helpers/types';

export const STUDENTS_MOCK: StudentsPayload = {
    students: [
        {
            id: 132,
            name: 'Дорохин Владислав',
            image: '',
            status: {
                type: StatusType.Accepted,
                number: 0,
            },
            interviewsCount: 12,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                },
                {
                    id: 2,
                    name: 'Kreosoft',
                },
                {
                    id: 4,
                    name: 'Тинькофф',
                },
            ],
            positions: [
                {
                    id: 1,
                    name: 'Frontend React',
                },
                {
                    id: 2,
                    name: 'Frontend Vue',
                },
                {
                    id: 4,
                    name: 'Backend PHP',
                },
            ],
            lastActivity: new Date(),
        },
        {
            id: 4,
            name: 'Дорохин Владислав',
            image: '',
            status: {
                type: StatusType.Issued,
                number: 4,
            },
            interviewsCount: 12,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Backend Java',
                },
            ],
            lastActivity: new Date(),
        },
        {
            id: 11,
            name: 'Дорохин Владислав',
            image: '',
            status: {
                type: StatusType.Interview,
                number: 0,
            },
            interviewsCount: 12,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Backend Java',
                },
            ],
            lastActivity: new Date(),
        },
        {
            id: 333,
            name: 'Дорохин Владислав',
            image: '',
            status: {
                type: StatusType.Empty,
                number: 0,
            },
            interviewsCount: 12,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Backend Java',
                },
            ],
            lastActivity: new Date(),
        },
        {
            id: 243,
            name: 'Дорохин Владислав',
            image: '',
            status: {
                type: StatusType.Refused,
                number: 0,
            },
            interviewsCount: 0,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Backend Java',
                },
            ],
            lastActivity: new Date(),
        },
    ],
};

export const STUDENT_INFO_MOCK: StudentInfoPayload = {
    id: 132,
    name: 'Дорохин Владислав',
    image: '',
    position: 'Frontend-разработчик',
    contacts: [
        {
            name: 'string',
            value: 'string',
        },
    ],
    interviews: [
        {
            id: 1,
            company: {
                id: 1,
                name: 'NTR',
            },
            position: 'Frontend React',
            status: StatusType.Accepted,
            comments: [
                {
                    author: {
                        id: 1,
                        name: 'Дорохин Владислав',
                        image: 'string',
                    },
                    timestamp: new Date(),
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ex non felis consequat rutrum. Vestibulum tempus leo eget ante eleifend, ac tempus ex scelerisque. Fusce in justo faucibus, laoreet velit sed, scelerisque lacus',
                },
                {
                    author: {
                        id: 1,
                        name: 'Дорохин Владислав',
                        image: 'string',
                    },
                    timestamp: new Date(),
                    text: 'Phasellus leo dui, sodales eu vehicula vitae, pharetra sed felis. Curabitur eros elit, blandit at tempor',
                },
                {
                    author: {
                        id: 1,
                        name: 'Дорохин Владислав',
                        image: 'string',
                    },
                    timestamp: new Date(),
                    text: 'Sed ultricies tellus a nunc ultrices auctor.',
                },
            ],
        },
        {
            id: 2,
            company: {
                id: 2,
                name: 'Kreosoft',
            },
            position: 'Frontend Vue',
            status: StatusType.Issued,
            comments: [
                {
                    author: {
                        id: 1,
                        name: 'string',
                        image: 'string',
                    },
                    timestamp: new Date(),
                    text: 'string',
                },
            ],
        },
        {
            id: 3,
            company: {
                id: 3,
                name: 'Red Mad Robot',
            },
            position: 'Backend PHP',
            status: StatusType.Refused,
            comments: [
                {
                    author: {
                        id: 1,
                        name: 'string',
                        image: 'string',
                    },
                    timestamp: new Date(),
                    text: 'string',
                },
            ],
        },
    ],
};
