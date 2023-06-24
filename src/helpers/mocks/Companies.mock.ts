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
    companyId: 1,
    name: 'NTR',
    description:
        'Компания НТР - разработчик информационных систем и программных продуктов. С 2000 года занимаемся разработкой и внедрением наукоемких технологических решений на основе машинного обучения и технологий искусственного интеллекта. Наша основная технологическая экспертиза - это системы на нейронных сетях, транспортные системы, высоконагруженные системы. Нашими клиентами в разное время были и есть ЕВРАЗ, Caltech, Skype, Intel, МегаФон, Mail.ru, Банк России, СИБУР, Газпромнефть. Работаем на русском и европейском/американском рынке.',
    image: 'https://www.meme-arsenal.com/memes/ec12b2d95f12a919311035ddfd7c03e2.jpg',
    representativesDto: [
        {
            representativeId: 1,
            name: 'Данила Соколов',
            position: 'Преподаватель HITs',
            image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
            contactsShortDto: [
                {
                    contactType: 'Email',
                    value: 'email@mail.com',
                },
                {
                    contactType: 'Телефон',
                    value: '80000000000',
                },
            ],
        },
    ],
    contactsFullDto: [
        {
            contactId: 2,
            name: 'Иващенко Екатерина',
            position: 'HR',
            image: 'https://img2.freepng.ru/20180504/phe/kisspng-professional-computer-icons-avatar-job-5aec571ec854c8.3222584415254382388206.jpg',
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
                    image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
                    status: StudentStatusType.Accepted,
                    lastActivity: new Date(),
                },
                {
                    id: 4,
                    name: 'Иванов Саша',
                    image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
                    status: StudentStatusType.Interview,
                    lastActivity: new Date(),
                },
                {
                    id: 11,
                    name: 'Скорополохов Владимир',
                    image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
                    status: StudentStatusType.Refused,
                    lastActivity: new Date(),
                },
                {
                    id: 333,
                    name: 'Вишневский Игорь',
                    image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
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
                    image: 'https://static.tildacdn.com/tild3431-3062-4262-a138-333662326332/png-clipart-teacher-.png',
                    status: StudentStatusType.Accepted,
                    lastActivity: new Date(),
                },
            ],
        },
    ],
};
