import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import rootReducer from "./rootReducer";
import { authApi } from "@/redux/api/authApi";

export const appStore = configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
})