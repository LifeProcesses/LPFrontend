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
            id: 4,
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
                type: StatusType.Accepted,
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
    ],
};
