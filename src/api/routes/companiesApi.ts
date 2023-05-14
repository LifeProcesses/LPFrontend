import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { CompaniesPayload } from 'api/Models';

export const companiesApi = createApi({
    reducerPath: 'companiesApi',
    tagTypes: [''],
    baseQuery: fetchBaseQuery({
        baseUrl: ``,
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
                    url: `companies`,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
            examplePost: build.mutation<null, null>({
                query: (body) => ({
                    url: ``,
                    method: 'POST',
                    body,
                }),
                invalidatesTags: [{ type: '' }],
            }),
        };
    },
});

export const { useGetCompaniesListQuery } = companiesApi;
