import axios from 'axios';
import { BASE_URL } from '../../config/config';


export const productsAPI = axios.create({
    baseURL: `${BASE_URL}/api/v1/products`,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": 'true',
    },
    withCredentials: true,
});