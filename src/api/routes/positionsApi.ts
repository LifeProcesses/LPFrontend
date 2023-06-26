import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { CreatePositionModel, PositionsPayload } from 'api/Models';

export const positionsApi = createApi({
    reducerPath: 'positionsApi',
    tagTypes: ['positions'],
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
                providesTags: [{ type: 'positions' }],
            }),
            createPosition: build.mutation<void, CreatePositionModel>({
                query: (body) => ({
                    url: ``,
                    method: 'POST',
                    body: body,
                }),
                invalidatesTags: [{ type: 'positions' }],
            }),
        };
    },
});

export const { useGetPositionsListQuery, useCreatePositionMutation } = positionsApi;
