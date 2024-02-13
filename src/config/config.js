//GLOBAL CONSTANTS
export const VITE_MODE = import.meta.env.PROD ? "production" : "development";

export const LOGGED_IN = false; //Temporary

const LOCAL_BASE_URL = "http://localhost:3000";

const HOSTED_BASE_URL = "https://store-backend-yylk.onrender.com";

export const BASE_URL = VITE_MODE === "development" ? LOCAL_BASE_URL : HOSTED_BASE_URL;

export const PASSWORD_REGEX = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
export const USERNAME_REGEX = "^[a-zA-Z0-9]{5,}$";

export const windowSize = window.innerWidth;

