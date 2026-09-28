import apiClient from "@/lib/apiClient";
import type { LoginPayload, RegisterPayload, VerifyAccountPayload } from "@/types";

export const userLogin = (payload : LoginPayload) => {
    return apiClient("/auth/login", {
        method: "POST",
        body: payload
    })
}

export const verifyAccount = (payload : VerifyAccountPayload) => {
    return apiClient("/auth/verify-email", {
        method: "POST",
        body: payload
    })
}

export const userRegister = (payload : RegisterPayload) => {
    return apiClient("/auth/register", {
        method: "POST",
        body: payload
    })
}

export const getMe = () => {
    return apiClient("/auth/me")
}

export const userLogout = () => {
    return apiClient("/auth/logout", {
        method: "POST"
    })
}

export const googleOAuth = (payload: { idToken: string }) => {
    return apiClient("/auth/google", {
        method: "POST",
        body: payload
    })
}