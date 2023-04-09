import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { exampleApi } from 'api/routes/exampleApi';

interface ExampleState {}

const initialState: ExampleState = {};

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        example: (state, { payload }: PayloadAction<null>) => {},
    },
    extraReducers: (builder) => {
        builder.addMatcher(exampleApi.endpoints.exampleGet.matchFulfilled, (state, { payload }) => {});
    },
});

export const { example } = exampleSlice.actions;

export default exampleSlice.reducer;
