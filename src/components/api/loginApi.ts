import axios from "axios";
import { IAuth } from "../../interfaces/account";
import axiosInstance, { BASE_URL } from "./axiosInstance";

const LOGIN_URI = `${BASE_URL}/auth/login`;
const SIGNUP_URI = "/auth/register";

export const LoginApi = {
    login: async (loginInfo: IAuth) => {
        try {
            const response = await axios.post(LOGIN_URI, loginInfo);
            return response;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert(error.response.data.message);
            }
            throw error;
        }
    },
    signUp: async (signupInfo: IAuth) => {
        try {
            await axiosInstance.post(SIGNUP_URI, signupInfo);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            }
        }
    },
};
