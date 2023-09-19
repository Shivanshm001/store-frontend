import axios from "axios";
import { BASE_URL } from "../config/config";

export const usersAPI = axios.create({
    baseURL: `${BASE_URL}/api/v1/users`,
});