import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import {
    AddCompanyPositionModel,
    CompanyDetailPayload,
    CompanyPayload,
    CompanyPositionsListPayload,
    CreateCompanyModel,
} from 'api/Models';

export const companiesApi = createApi({
    reducerPath: 'companiesApi',
    tagTypes: ['companies', 'companyPositions'],
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
            getCompaniesList: build.query<CompanyPayload[], void>({
                query: () => ({
                    url: ``,
                    method: 'GET',
                }),
                providesTags: [{ type: 'companies' }],
            }),
            getCompanyDetails: build.query<CompanyDetailPayload, number>({
                query: (id) => ({
                    url: `/${id}`,
                    method: 'GET',
                }),
            }),
            getCompanyPositions: build.query<CompanyPositionsListPayload, number>({
                query: (id) => ({
                    url: `/${id}/positions`,
                    method: 'GET',
                }),
                providesTags: [{ type: 'companyPositions' }],
            }),
            addCompanyPosition: build.mutation<void, AddCompanyPositionModel>({
                query: (body) => ({
                    url: `/${body.companyId}/positions`,
                    method: 'POST',
                    body: body.position,
                }),
                invalidatesTags: [{ type: 'companyPositions' }],
            }),
            createCompany: build.mutation<void, CreateCompanyModel>({
                query: (body) => ({
                    url: ``,
                    method: 'POST',
                    body,
                }),
                invalidatesTags: [{ type: 'companies' }],
            }),
        };
    },
});

export const {
    useGetCompaniesListQuery,
    useGetCompanyDetailsQuery,
    useGetCompanyPositionsQuery,
    useAddCompanyPositionMutation,
    useCreateCompanyMutation,
} = companiesApi;
