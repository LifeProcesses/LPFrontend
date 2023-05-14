import { configureStore } from '@reduxjs/toolkit';

import example from './reducers/exampleSlice';

import { CompaniesApi } from 'api/routes/CompaniesApi';

const store = configureStore({
    reducer: {
        example,
        [CompaniesApi.reducerPath]: CompaniesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: false,
        }).concat(CompaniesApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
