import { PositionsPayload } from 'api/Models';

export const POSITIONS_MOCK: PositionsPayload = {
    plan: 100,
    taken: 14,
    positions: [
        {
            id: 1,
            name: 'Frontend React',
            plan: 12,
            taken: 5,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
                {
                    id: 2,
                    name: 'Kreosoft',
                    plan: 11,
                    taken: 5,
                },
                {
                    id: 4,
                    name: 'Тинькофф',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
        {
            id: 2,
            name: 'Frontend Vue',
            plan: 12,
            taken: 5,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
        {
            id: 3,
            name: 'Backend Java',
            plan: 12,
            taken: 5,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
        {
            id: 4,
            name: 'Backend PHP',
            plan: 12,
            taken: 5,
            companies: [
                {
                    id: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
    ],
};
