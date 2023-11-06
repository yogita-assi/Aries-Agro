import axios from 'axios';
import { ENVIRONMENT } from '../shared/constants/environment';
import authAxiosInstance from './authAxios';

const SignIn = (requestBody: any) => {
    const url = `${ENVIRONMENT.AUTH_API_URL}auth/otp/init`;
    return axios.post(url, requestBody);
}
const verifyOTP = (requestBody: any) => {
    const url = `${ENVIRONMENT.AUTH_API_URL}auth/otp/verify`;
    return axios.post(url, requestBody);
}
const registerUser = (requestBody: any) => {
    const url = `${ENVIRONMENT.AUTH_API_URL}users`;
    return authAxiosInstance.post(url, requestBody);
}
export default {
    SignIn, verifyOTP, registerUser
}



