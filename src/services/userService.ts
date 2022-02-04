import http from "./httpService";
import config from "./config.json";
import { AxiosResponse } from "axios";

export const CONTACT_INITIAL_VALUES = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    captchaResponse: "",
};

export type ContactValues = typeof CONTACT_INITIAL_VALUES;

export interface LoginResponse extends AxiosResponse {
    data: {
        token: string;
        userId: string;
    }
}

interface User {
    fullname?: string;
    email?: string;
    password?: string;
    favorites?: string[];
    shoppingCart?: string[];
}

export interface ChangePasswordData {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}

export interface ForgetPasswordData {
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}

export interface SendVerifyEmailResponse extends AxiosResponse {
    data: {
        verifyCode: number
    }
}

interface Data {
    message?: string
}

export const registerUser = (user: User) => {
    return http.post(`${config.baseUrl}/register`, user);
}

export const loginUser = (user: User): Promise<LoginResponse> => {
    return http.post(`${config.baseUrl}/login`, user);
}

export const changePassword = (changePasswordData: ChangePasswordData): Promise<AxiosResponse> => {
    return http.post(`${config.baseUrl}/dashboard/change-password`, changePasswordData);
}

export const sendVerifyCode = (email: string): Promise<SendVerifyEmailResponse> => {
    return http.post(`${config.baseUrl}/dashboard/send-verify-code`, { email });
}

export const forgetPassword = (data: ForgetPasswordData): Promise<AxiosResponse> => {
    return http.post(`${config.baseUrl}/dashboard/forget-password`, data);
}

export const sendContactEmail = (data: ContactValues): Promise<AxiosResponse<Data>> => {
    return http.post(`${config.baseUrl}/dashboard//contact-us`, data);
}