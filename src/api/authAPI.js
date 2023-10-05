import axios from "axios";
import { BASE_URL } from "../config/config";


export const authAPI = axios.create({
    baseURL: `${BASE_URL}/auth`,
    headers: {
        "Content-Type": "application/json",
    },
})