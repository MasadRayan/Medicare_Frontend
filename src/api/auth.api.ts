import apiClient from "@/lib/apiClient";

interface LoginPayload {
    email: string;
    password: string;
}

export const userLogin = (payload : LoginPayload) => {
    return apiClient("/api/auth/login", {
        method: "POST",
        body: payload
    })
}