import {useQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {axiosInstance} from "./axiosInstance";

export const useFetchUsers = () => {
    return useQuery<any, AxiosError>(["users"],
        async () =>
            (
                await axiosInstance.get(
                    `/api/?results=20`
                )
            ).data
    )
}
