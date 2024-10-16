import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "https://gentle-zilvia-recoder-a0d5fd3e.koyeb.app";

const config: AxiosRequestConfig = { baseURL: BASE_URL };

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(config => {
    if (!config.headers) return config;

    const accessToken = localStorage.getItem("accessToken") || "";
    const refreshToken = localStorage.getItem("refreshToken") || "";

    if (config.url === "/auth/reissue") {
        config.headers.Refresh = refreshToken;
    } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

const reIssuedToken = async () => {
    try {
        const res = await axiosInstance.get(`/auth/reissue`);

        localStorage.setItem("accessToken", res.headers.authorization || "");
        if (res.headers.refresh) {
            localStorage.setItem("refreshToken", res.headers.refresh);
        }

        return localStorage.getItem("accessToken");
    } catch (e) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return null;
    }
};

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const { config, response } = error;

        if (config.url === `/auth/reissue` || response?.status !== 402 || config.sent) {
            return Promise.reject(error);
        }

        config.sent = true;
        const access_token = await reIssuedToken();

        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }

        return axiosInstance(config);
    }
);

export default axiosInstance;
