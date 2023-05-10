import { StatusType, StudentsPayload } from 'api/Models';

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
                    id: 13,
                    name: 'NTR',
                },
                {
                    id: 134,
                    name: 'Kreosoft',
                },
                {
                    id: 13,
                    name: 'Тинькофф',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Frontend',
                },
                {
                    id: 1,
                    name: 'Backend',
                },
                {
                    id: 4,
                    name: 'SEO',
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
                    id: 13,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Frontend',
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
                    id: 13,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Frontend',
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
                    id: 13,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Frontend',
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
                    id: 13,
                    name: 'NTR',
                },
            ],
            positions: [
                {
                    id: 3,
                    name: 'Frontend',
                },
            ],
            lastActivity: new Date(),
        },
    ],
};
