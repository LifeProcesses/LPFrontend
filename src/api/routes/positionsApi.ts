import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { PositionsPayload } from 'api/Models';

export const positionsApi = createApi({
    reducerPath: 'positionsApi',
    tagTypes: [''],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080/positions`,
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
                    url: ``,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
        };
    },
});

export const { useGetPositionsListQuery } = positionsApi;
