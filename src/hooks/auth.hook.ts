import { getMe, googleOAuth, userLogin, userLogout, userRegister, verifyAccount } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { EXPORT_DETAIL } from "next/constants";

export const useLogin  = () => {
    return useMutation({
        mutationFn: userLogin,
    })
}

export const useVerifyAccount  = () => {
    return useMutation({
        mutationFn: verifyAccount,
    })
}

export const useRegister = () => {
    return useMutation({
        mutationFn: userRegister,
    })
}

export const useGoogleOAuth = () => {
    return useMutation({
        mutationFn: googleOAuth
    })
}

export const useLogout  = () => {
    return useMutation({
        mutationFn: userLogout,
    })
}

export const useGetme = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: getMe,
        retry: false,
    })
}