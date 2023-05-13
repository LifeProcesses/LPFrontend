import { configureStore } from '@reduxjs/toolkit';

import students from './reducers/studentsSlice';

import { companiesApi } from 'api/routes/companiesApi';
import { positionsApi } from 'api/routes/positionsApi';
import { studentsApi } from 'api/routes/studentsApi';

const store = configureStore({
    reducer: {
        students,
        [positionsApi.reducerPath]: positionsApi.reducer,
        [studentsApi.reducerPath]: studentsApi.reducer,
        [companiesApi.reducerPath]: companiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: false,
        }).concat(positionsApi.middleware, studentsApi.middleware, companiesApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
