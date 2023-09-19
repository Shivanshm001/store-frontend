export const VITE_MODE = import.meta.env.PROD ? "production" : "development";
export const LOGGED_IN = false;

export const BASE_URL = VITE_MODE === "development"? "http://localhost:3000":"https://store-backend-yylk.onrender.com";