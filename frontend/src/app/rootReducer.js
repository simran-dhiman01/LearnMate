import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../redux/authSlice'
import { authApi } from '@/redux/api/authApi'

const rootReducer = combineReducers({
    [authApi.reducerPath] : authApi.reducer,
    auth:authReducer
})

export default rootReducer