import axios from "axios";
import { BASE_URL } from "../config/config";


export const authAPI = axios.create({
    baseURL: `${BASE_URL}/api/v1/users`,
    headers: {
        "Content-Type": "application/json",
    }
})