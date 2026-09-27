import { getMe, googleOAuth, userLogin, userLogout } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { EXPORT_DETAIL } from "next/constants";

export const useLogin  = () => {
    return useMutation({
        mutationFn: userLogin,
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