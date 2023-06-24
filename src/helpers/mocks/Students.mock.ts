import { StudentInfoPayload, StudentPayload } from 'api/Models';
import { InterviewStatusType, StudentStatusType } from 'helpers/types';

export const STUDENTS_MOCK: StudentPayload[] = [
    {
        id: 132,
        name: 'Дорохин Владислав',
        image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
        status: {
            type: StudentStatusType.Accepted,
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
        name: 'Скорополохов Владимир',
        image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
        status: {
            type: StudentStatusType.Issued,
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
        name: 'Иванов Саша',
        image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
        status: {
            type: StudentStatusType.Interview,
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
        name: 'Вишневский Игорь',
        image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
        status: {
            type: StudentStatusType.Empty,
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
        name: 'Воронова Маша',
        image: 'https://img2.freepng.ru/20180504/phe/kisspng-professional-computer-icons-avatar-job-5aec571ec854c8.3222584415254382388206.jpg',
        status: {
            type: StudentStatusType.Refused,
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
];

export const STUDENT_INFO_MOCK: StudentInfoPayload = {
    id: 132,
    name: 'Дорохин Владислав',
    image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
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
            status: InterviewStatusType.Accepted,
            comments: [
                {
                    author: {
                        id: 1,
                        name: 'Иващенко Елена',
                        image: 'https://img2.freepng.ru/20180504/phe/kisspng-professional-computer-icons-avatar-job-5aec571ec854c8.3222584415254382388206.jpg',
                    },
                    timestamp: new Date(),
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ex non felis consequat rutrum. Vestibulum tempus leo eget ante eleifend, ac tempus ex scelerisque. Fusce in justo faucibus, laoreet velit sed, scelerisque lacus',
                },
                {
                    author: {
                        id: 1,
                        name: 'Дорохин Владислав',
                        image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
                    },
                    timestamp: new Date(),
                    text: 'Phasellus leo dui, sodales eu vehicula vitae, pharetra sed felis. Curabitur eros elit, blandit at tempor',
                },
                {
                    author: {
                        id: 1,
                        name: 'Иващенко Елена',
                        image: 'https://img2.freepng.ru/20180504/phe/kisspng-professional-computer-icons-avatar-job-5aec571ec854c8.3222584415254382388206.jpg',
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
            status: InterviewStatusType.Issued,
            comments: [
                {
                    author: {
                        id: 1,
                        name: 'Дорохин Владислав',
                        image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
                    },
                    timestamp: new Date(),
                    text: 'Phasellus leo dui, sodales eu vehicula vitae, pharetra sed felis. Curabitur eros elit, blandit at tempor',
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
            status: InterviewStatusType.Refused,
            comments: [
                {
                    author: {
                        id: 1,
                        name: 'Дорохин Владислав',
                        image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
                    },
                    timestamp: new Date(),
                    text: 'Phasellus leo dui, sodales eu vehicula vitae, pharetra sed felis. Curabitur eros elit, blandit at tempor',
                },
            ],
        },
    ],
};
