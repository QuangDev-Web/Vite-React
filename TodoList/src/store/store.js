import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/auth/authSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // sử dụng localStorage

// gộp reducer
const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer

    // thêm slice khác ở đây nếu cần
});

// Config persist
const persistConfig = {
    key: 'root',        // key trong localStorage
    storage,            // mặc định localStorage
    whitelist: ['auth'] // chỉ persist slice 'auth' (có thể thêm 'cart', v.v.)
    // blacklist: ['ui'] // ngược lại, không lưu những slice này
};
const persistedReducer = persistReducer(
    persistConfig,
    rootReducer // có thể gộp nhiều reducer vào combineReducers trước khi persist
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // fix cảnh báo redux-persist
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);