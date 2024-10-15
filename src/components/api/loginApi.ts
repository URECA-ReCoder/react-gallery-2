import { IAuth } from "../../interfaces/account";
import axiosInstance from "./axiosInstance";

const LOGIN_URI = "/auth/login";
const SIGNUP_URI = "/auth/register";

export const LoginApi = {
    login: async (loginInfo: IAuth) => await axiosInstance.post(LOGIN_URI, loginInfo).then(res => res.data),
    signUp: async (signupInfo: IAuth) => {
        try {
            await axiosInstance.post(SIGNUP_URI, signupInfo);
            localStorage.setItem("userExists", "true");
        } catch (error) {
            console.log("회원가입 실패");
        }
    },
};
