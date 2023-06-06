import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ChangeInterviewStatusModel, CommentModel, StudentInfoPayload, StudentsPayload } from 'api/Models';

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
            getStudentInfo: build.query<StudentInfoPayload, number>({
                query: (id) => ({
                    url: `students/${id}`,
                    method: 'GET',
                }),
                providesTags: [{ type: '' }],
            }),
            addInterviewComment: build.mutation<void, CommentModel>({
                query: (comment) => ({
                    url: `companies/${comment.companyId}/interviews/${comment.interviewId}/comments`,
                    method: 'POST',
                    body: comment.text,
                }),
                invalidatesTags: [{ type: '' }],
            }),
            changeInterviewStatus: build.mutation<void, ChangeInterviewStatusModel>({
                query: (status) => ({
                    url: `companies/${status.companyId}/interviews/${status.interviewId}/status`,
                    method: 'POST',
                    body: status.status,
                }),
                invalidatesTags: [{ type: '' }],
            }),
        };
    },
});

export const {
    useGetStudentsListQuery,
    useLazyGetStudentInfoQuery,
    useAddInterviewCommentMutation,
    useChangeInterviewStatusMutation,
} = studentsApi;
