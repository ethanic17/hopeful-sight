import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = "http://54.183.85.198";

export function useAxiosWithToken() {
  const getInitialToken = () => localStorage.getItem("token") || "";
  const [token, setToken] = useState(getInitialToken);

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: { "Content-Type": "application/json" },
  });

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Token ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [token, axiosInstance]);

  const setTokenAndUpdate = (newToken) => {
    console.log("Token changed: ", newToken);
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return { axiosInstance, token, setToken: setTokenAndUpdate, removeToken };
}

export default useAxiosWithToken;
