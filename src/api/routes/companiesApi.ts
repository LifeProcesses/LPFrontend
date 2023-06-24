import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { CompaniesPayload, CompanyDetailPayload, CompanyPositionsListPayload, CreateCompanyModel } from 'api/Models';

export const companiesApi = createApi({
    reducerPath: 'companiesApi',
    tagTypes: [''],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080/companies`,
        prepareHeaders: (headers) => {
            // get token from LS
            const token = '';
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    endpoints: (build) => {
        return {
            getCompaniesList: build.query<CompaniesPayload, void>({
                query: () => ({
                    url: ``,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
            getCompanyDetails: build.query<CompanyDetailPayload, number>({
                query: (id) => ({
                    url: `/${id}`,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
            getCompanyPositions: build.query<CompanyPositionsListPayload, number>({
                query: (id) => ({
                    url: `/${id}/positions`,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
            createCompany: build.mutation<void, CreateCompanyModel>({
                query: (company) => ({
                    url: `/addCompany`,
                    method: 'POST',
                    body: company,
                }),
                invalidatesTags: [{ type: '' }],
            }),
        };
    },
});

export const {
    useGetCompaniesListQuery,
    useGetCompanyDetailsQuery,
    useGetCompanyPositionsQuery,
    useCreateCompanyMutation,
} = companiesApi;
