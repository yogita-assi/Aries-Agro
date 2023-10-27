import axios from 'axios';
import { ENVIRONMENT } from '../shared/constants/environment';
import authAxiosInstance from './authAxios';

const SignIn = (requestBody: any) => {
    const url = `${ENVIRONMENT.AUTH_API_URL}Auth/Login`;
    return axios.post(url, requestBody);
}
export default {
    SignIn
}



