import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { GetCompanies, GetCompany } from './Models';

const baseUrl = 'https://hits/api/';

export const CompaniesApi = createApi({
    reducerPath: 'companies',
    tagTypes: [''],
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),

    endpoints: (build) => {
        return {
            getCompanies: build.query<GetCompanies, void>({
                query: () => ({
                    url: `companies`,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
            getCompany: build.query<GetCompany, void>({
                query: () => ({
                    url: ``,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
        };
    },
});

export const {
    useGetCompaniesQuery,
    useGetCompanyQuery,
} = CompaniesApi
