import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { PositionsPayload } from 'api/Models';

export const positionsApi = createApi({
    reducerPath: 'positionsApi',
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
            getPositionsList: build.query<PositionsPayload, void>({
                query: () => ({
                    url: `positions`,
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

export const { useGetPositionsListQuery } = positionsApi;
