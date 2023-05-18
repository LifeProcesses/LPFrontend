import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { CompaniesPayload } from 'api/Models';

export const companiesApi = createApi({
    reducerPath: 'companiesApi',
    tagTypes: [''],
    baseQuery: fetchBaseQuery({
        baseUrl: `companies/`,
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
        };
    },
});

export const { useGetCompaniesListQuery } = companiesApi;
