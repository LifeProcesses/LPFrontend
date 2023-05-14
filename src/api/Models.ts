/* eslint-disable no-unused-vars */
import { StatusType } from 'helpers/types';

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

export interface CompaniesPayload {
    companies: CompanyPayload[];
}

export interface CompanyPayload {
    id: number;
    name: string;
    plan: number;
    taken: number;
}

export interface PositionsPayload {
    plan: number;
    taken: number;
    positions: PositionPayload[];
}

export interface PositionPayload {
    id: number;
    name: string;
    plan: number;
    taken: number;
    companies: CompanyPayload[];
}

export interface AModel {}
