/* eslint-disable no-unused-vars */
import { InterviewStatusType, StudentStatusType } from 'helpers/types';

// export interface StudentsPayload {
//     students: StudentPayload[];
// }

export interface StudentPayload {
    studentId: number;
    name: string;
    image: string;
    status: {
        type: StudentStatusType;
        number: number;
    } | null;
    interviewsCount: number;
    companies: {
        id: number;
        name: string;
    }[];
    positions: {
        id: number;
        name: string;
    }[];
    lastActivity: Date | null;
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

// export interface CompaniesPayload {
//     companies: CompanyPayload[];
// }

export interface CompanyPayload {
    companyId: number;
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
    positionId: number;
    name: string;
    plan: number;
    taken: number;
    companies: CompanyPayload[];
}

export interface CreatePositionModel {
    name: string;
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
    companyId: number;
    name: string;
    description: string;
    image: string;
    representatives: CompanyRepresentativePayload[];
    contacts: CompanyContactPayload[];
}

export interface CompanyRepresentativePayload {
    representativeId: number;
    name: string;
    position: string;
    image: string;
    contacts: {
        contactType: string;
        value: string;
    }[];
}

export interface CompanyContactPayload {
    contactId: number;
    name: string;
    position: string;
    image: string;
    contactType: string;
    value: string;
}

export interface CompanyPositionsListPayload {
    plan: number;
    taken: number;
    positionsListForOneCompany: CompanyPositionPayload[];
}

export interface CompanyPositionPayload {
    positionId: number;
    positionTypeId: number;
    name: string;
    plan: number;
    taken: number;
    students: CompanyPositionStudentPayload[];
}

export interface AddCompanyPositionModel {
    companyId: number;
    position: {
        postionTypeId: string;
        plan: number;
    };
}

export interface CompanyPositionStudentPayload {
    studentId: number;
    name: string;
    image: string;
    status: StudentStatusType;
    lastActivity: Date;
}

export interface CreateCompanyModel {
    name: string;
    description: string;
    image: string;
    representatives: CompanyRepresentativeModel[];
    contacts: CompanyContactModel[];
}

export interface CompanyContactModel {
    name: string;
    position: string;
    contactType: string;
    value: string;
}

export interface CompanyRepresentativeModel {
    id: number;
    name: string;
    position: string;
    contacts: CompanyRepresentativeContactModel[];
}

export interface CompanyRepresentativeContactModel {
    contactType: string;
    value: string;
}
