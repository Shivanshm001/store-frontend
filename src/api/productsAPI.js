import axios from 'axios';


export const productsAPI = axios.create({
    baseURL: "http://localhost:3000/api/v1/products",
    headers: {
        "Content-Type": "application/json"
    }
});