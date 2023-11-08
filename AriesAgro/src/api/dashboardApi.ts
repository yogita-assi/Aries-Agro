import axios from 'axios';
import { ENVIRONMENT } from '../shared/constants/environment';
import authAxiosInstance from './authAxios';

const campaignList = (requestBody: any) => {
    const url = `${ENVIRONMENT.AUTH_API_URL}campaign/get`;
    return authAxiosInstance.post(url, requestBody);
}

export default {
    campaignList
}

