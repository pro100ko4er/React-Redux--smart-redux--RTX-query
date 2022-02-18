import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice'
import { UserApi } from '../service/UserServices';
const rootReducer = combineReducers({
    userReducer,
    [UserApi.reducerPath]: UserApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UserApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']