import { PositionsPayload } from 'api/Models';

export const POSITIONS_MOCK: PositionsPayload = {
    plan: 10,
    taken: 4,
    positions: [
        {
            positionId: 1,
            name: 'Frontend React',
            plan: 12,
            taken: 5,
            companies: [
                {
                    companyId: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
                {
                    companyId: 2,
                    name: 'Kreosoft',
                    plan: 11,
                    taken: 5,
                },
                {
                    companyId: 4,
                    name: 'Тинькофф',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
        {
            positionId: 2,
            name: 'Frontend Vue',
            plan: 12,
            taken: 5,
            companies: [
                {
                    companyId: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
        {
            positionId: 3,
            name: 'Backend Java',
            plan: 12,
            taken: 5,
            companies: [
                {
                    companyId: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
        {
            positionId: 4,
            name: 'Backend PHP',
            plan: 12,
            taken: 5,
            companies: [
                {
                    companyId: 1,
                    name: 'NTR',
                    plan: 11,
                    taken: 5,
                },
            ],
        },
    ],
};
