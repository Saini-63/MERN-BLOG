import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './../reducers/user.reducer';
import createSagaMiddleware from 'redux-saga';
import user from '../saga/user.saga';



const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
    reducer: userReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true,
})

sagaMiddleware.run(user);