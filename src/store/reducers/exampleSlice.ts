import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CompaniesApi } from 'api/routes/CompaniesApi';

interface ExampleState {}

const initialState: ExampleState = {};

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        example: (state, { payload }: PayloadAction<null>) => {},
    },
    extraReducers: (builder) => {
        builder.addMatcher(CompaniesApi.endpoints.getCompanies.matchFulfilled, (state, { payload }) => {});
    },
});

export const { example } = exampleSlice.actions;

export default exampleSlice.reducer;
