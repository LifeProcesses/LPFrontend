/* eslint-disable no-unused-vars */
export interface StudentsPayload {
    students: StudentPayload[];
}

export interface StudentPayload {
    id: number;
    name: string;
    image: string;
    status: {
        type: StatusType;
        number: number;
    };
    interviewsCount: number;
    companies: {
        id: number;
        name: string;
    }[];
    positions: {
        id: number;
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

export interface AModel {}
