/* eslint-disable no-unused-vars */
import { InterviewStatusType, StudentStatusType } from 'helpers/types';

export interface StudentsPayload {
    students: StudentPayload[];
}

export interface StudentPayload {
    id: number;
    name: string;
    image: string;
    status: {
        type: StudentStatusType;
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

export interface StudentInfoPayload {
    id: number;
    name: string;
    image: string;
    position: string;
    contacts: {
        name: string;
        value: string;
    }[];
    interviews: InterviewPayload[];
}

export interface InterviewPayload {
    id: number;
    company: {
        id: number;
        name: string;
    };
    position: string;
    status: InterviewStatusType;
    comments: CommentPayload[];
}

export interface CommentPayload {
    author: {
        id: number;
        name: string;
        image: string;
    };
    timestamp: Date;
    text: string;
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

export interface CommentModel {
    companyId: number;
    interviewId: number;
    text: string;
}

export interface ChangeInterviewStatusModel {
    companyId: number;
    interviewId: number;
    status: string;
}

export interface CompanyDetailPayload {
    id: number;
    name: string;
    description: string;
    image: string;
    representatives: CompanyContactPayload[];
    contacts: CompanyContactPayload[];
}

export interface CompanyContactPayload {
    id: number;
    name: string;
    position: string;
    image: string;
    contactType: string;
    value: string;
}

export interface CompanyPositionsListPayload {
    plan: number;
    taken: number;
    positions: CompanyPositionPayload[];
}

export interface CompanyPositionPayload {
    id: number;
    positionTypeId: number;
    name: string;
    plan: number;
    taken: number;
    students: CompanyPositionStudentPayload[];
}

export interface CompanyPositionStudentPayload {
    id: number;
    name: string;
    image: string;
    status: StudentStatusType;
    lastActivity: Date;
}

export interface CreateCompanyModel {
    name: string;
    description: string;
    image: string;
    plan: number;
    taken: number;
    representatives: CompanyRepresentativesModel[];
    contacts: CompanyContactModel[];
}

export interface CompanyContactModel {
    name: string;
    position: string;
    contactType: string;
    value: string;
}

export interface CompanyRepresentativesModel {
    name: string;
    position: string;
    contacts: CompanyContactModel[];
}
