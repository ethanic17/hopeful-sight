import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../app/features/userSlice";

const baseUrl = import.meta.env.VITE_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export function useAxiosWithToken() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        console.log("request");
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Token ${token}`;
          console.log("Auth: ", config.headers.Authorization);
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (good) => good,
      async (error) => {
        const prevRequest = error?.config;
        console.log("Error: ", prevRequest);
        if (
          (error?.response?.status === 400 ||
            error?.response?.status === 403) &&
          !prevRequest?.sent
        ) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          console.log("New access token: ", newAccessToken);
          prevRequest.headers["Authorization"] = `Token ${newAccessToken}`;
          dispatch(setAuth(newAccessToken));
          return axiosInstance(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [token]);

  return axiosInstance;
}

export default useAxiosWithToken;

async function refresh() {
  const getInitialToken = () => localStorage.getItem("token") || "";
  console.log("New token: ", getInitialToken());
  return getInitialToken();
}
