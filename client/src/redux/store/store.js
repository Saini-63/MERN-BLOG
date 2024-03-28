import { configureStore } from '@reduxjs/toolkit';
//import { userReducer } from './../reducers/user.reducer';
import createSagaMiddleware from 'redux-saga';
import user from '../saga/user.saga';
import { rootReducer } from '../reducers/root.reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
    devTools: true,
})

sagaMiddleware.run(user);

export const persistor = persistStore(store);