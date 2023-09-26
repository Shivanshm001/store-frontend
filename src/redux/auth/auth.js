import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authAPI } from "../../api/authAPI"


const initialState = {
    isLoggedIn: false,
    error: {},
    loginData: {},
    registerData: {},
    accessToken: "",
}


export const userLogin = createAsyncThunk("auth/userLogin", async (payload, thunkApi) => {
    try {
        const resp = await authAPI.post("/", payload.loginData);
        thunkApi.fulfillWithValue(resp.data);
    } catch (error) {
        thunkApi.rejectWithValue(error);
    }
});



export const userRegister = createAsyncThunk("auth/userRegister", async (payload, thunkApi) => {
    try {
        
    } catch (error) {
        
    }
}) 
export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setLoggedIn: (state, { payload }) => {
            state.isLoggedIn = payload?.isLoggedIn;
        },
        setLoginData: (state, { payload }) => {
            state.loginData = payload?.loginData;
        },

        setRegisterData: (state, { payload }) => {
            state.registerData = payload?.registerData;
        },
        setAccessToken: (state, { payload }) => {
            state.accessToken = payload?.accessToken;
        },
        setError: (state, { payload }) => {
            state.error = payload?.error;
        }
    },

    extraReducers: {

    }
});


export const { setAccessToken, setError, setLoggedIn, setLoginData, setRegisterData } = authSlice.actions;
export const authReducer = authSlice.reducer;