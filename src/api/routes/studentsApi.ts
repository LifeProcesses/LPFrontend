import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { StudentsPayload } from 'api/Models';

export const studentsApi = createApi({
    reducerPath: 'studentsApi',
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
            getStudentsList: build.query<StudentsPayload, void>({
                query: () => ({
                    url: `students`,
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

export const { useGetStudentsListQuery } = studentsApi;
