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