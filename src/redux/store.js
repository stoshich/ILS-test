import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { watchFetchRoute } from "./saga";
import polylineSlice from "./slices/polylineSlice";
import routeSlice from "./slices/routeSlice";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        route: routeSlice,
        polyline: polylineSlice
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watchFetchRoute)