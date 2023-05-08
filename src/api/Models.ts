/* eslint-disable no-unused-vars */
export interface StudentsPayload {
    students: StudentPayload[];
}

export interface StudentPayload {
    id: string;
    name: string;
    image: string;
    status: {
        type: StatusType;
        number: 0;
    };
    interviewsCount: 0;
    companies: {
        id: string;
        name: string;
    }[];
    positions: {
        id: string;
        name: string;
    }[];
    lastActivity: Date;
}

export enum StatusType {
    Accepted = 'accepted',
    Issued = 'issued',
    Interview = 'interview',
    Refused = 'refused',
    Empty = 'empty',
}

// запросы на сервер
export interface AModel {}
