import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const exampleApi = createApi({
    reducerPath: 'exampleApi',
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
            exampleGet: build.query<null, null>({
                query: () => ({
                    url: ``,
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

export const { useExampleGetQuery, useLazyExampleGetQuery, useExamplePostMutation } = exampleApi;
