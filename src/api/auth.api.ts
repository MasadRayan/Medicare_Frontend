import apiClient from "@/lib/apiClient";

interface LoginPayload {
    email: string;
    password: string;
}

export const userLogin = (payload : LoginPayload) => {
    return apiClient("/auth/login", {
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