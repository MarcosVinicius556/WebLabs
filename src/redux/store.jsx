import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import applicationSagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const applicationStore = configureStore({
    reducer: rootReducer,
    // middleware: [ sagaMiddleware ] Ainda não está sendo utilizado
});

// sagaMiddleware.run(applicationSagas);