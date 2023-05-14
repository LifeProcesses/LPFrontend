export interface GetCompanies {
    companies: GetCompaniesData[];
}

export interface GetCompaniesData {
    id: string;
    name: string;
    plan: number;
    taken: number;
}

//

export interface GetCompany {
    id: string;
    name: string;
    description: string;
    image: string;
    representatives: GetCompanyRepresentatives[];
    contacts: GetCompanyContacts[];
}

export interface GetCompanyRepresentatives {
    id: string;
    name: string;
    position: string;
    contacts: GetCompanyContacts[];
}

export interface GetCompanyContacts {
    name: string;
    value: string;
}