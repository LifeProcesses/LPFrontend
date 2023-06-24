import { CompanyPayload, CompanyDetailPayload, CompanyPositionsListPayload } from 'api/Models';
import { StudentStatusType } from 'helpers/types';

export const COMPANIES_MOCK: CompanyPayload[] = [
    {
        companyId: 1,
        name: 'NTR',
        plan: 12,
        taken: 8,
    },
    {
        companyId: 2,
        name: 'Kreosoft',
        plan: 12,
        taken: 8,
    },
    {
        companyId: 3,
        name: 'Red Mad Robot',
        plan: 12,
        taken: 8,
    },
    {
        companyId: 4,
        name: 'Tinkoff',
        plan: 12,
        taken: 8,
    },
];

export const COMPANY_DETAIL_MOCK: CompanyDetailPayload = {
    id: 1,
    name: 'NTR',
    description:
        'Компания НТР - разработчик информационных систем и программных продуктов. С 2000 года занимаемся разработкой и внедрением наукоемких технологических решений на основе машинного обучения и технологий искусственного интеллекта. Наша основная технологическая экспертиза - это системы на нейронных сетях, транспортные системы, высоконагруженные системы. Нашими клиентами в разное время были и есть ЕВРАЗ, Caltech, Skype, Intel, МегаФон, Mail.ru, Банк России, СИБУР, Газпромнефть. Работаем на русском и европейском/американском рынке.',
    image: 'https://www.meme-arsenal.com/memes/ec12b2d95f12a919311035ddfd7c03e2.jpg',
    representatives: [
        {
            id: 1,
            name: 'Данила Соколов',
            position: 'Преподаватель HITs',
            image: '',
            contactType: 'Email',
            value: 'email@mail.com',
        },
        {
            id: 2,
            name: 'Данила Соколов',
            position: 'Преподаватель HITs',
            image: '',
            contactType: 'Телефон',
            value: '80000000000',
        },
    ],
    contacts: [
        {
            id: 2,
            name: 'Иващенко Екатерина',
            position: 'HR',
            image: '',
            contactType: 'Email',
            value: 'email@mail.com',
        },
    ],
};

export const COMPANY_POSITIONS_MOCK: CompanyPositionsListPayload = {
    plan: 16,
    taken: 3,
    positions: [
        {
            id: 1,
            positionTypeId: 1,
            name: 'Frontend React',
            plan: 5,
            taken: 1,
            students: [
                {
                    id: 132,
                    name: 'Дорохин Владислав',
                    image: '',
                    status: StudentStatusType.Accepted,
                    lastActivity: new Date(),
                },
                {
                    id: 4,
                    name: 'Дорохин Владислав',
                    image: '',
                    status: StudentStatusType.Interview,
                    lastActivity: new Date(),
                },
                {
                    id: 11,
                    name: 'Дорохин Владислав',
                    image: '',
                    status: StudentStatusType.Refused,
                    lastActivity: new Date(),
                },
                {
                    id: 333,
                    name: 'Дорохин Владислав',
                    image: '',
                    status: StudentStatusType.Issued,
                    lastActivity: new Date(),
                },
            ],
        },
        {
            id: 2,
            positionTypeId: 2,
            name: 'Frontend Vue',
            plan: 1,
            taken: 0,
            students: [
                {
                    id: 11,
                    name: 'Дорохин Владислав',
                    image: '',
                    status: StudentStatusType.Accepted,
                    lastActivity: new Date(),
                },
            ],
        },
    ],
};
