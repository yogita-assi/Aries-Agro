import axios from 'axios';
import { ENVIRONMENT } from '../shared/constants/environment';
import authAxiosInstance from './authAxios';

const getProductList = (requestBody:any) => {
    const url = `${ENVIRONMENT.AUTH_API_URL}product/list`;
    console.log(url,"..")
    return authAxiosInstance.get(url,requestBody);
}
export default {
    getProductList
}



