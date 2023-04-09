import { configureStore } from '@reduxjs/toolkit';

import example from './reducers/exampleSlice';

import { exampleApi } from 'api/routes/exampleApi';

const store = configureStore({
    reducer: {
        example,
        [exampleApi.reducerPath]: exampleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: false,
        }).concat(exampleApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
