import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/authAPI";
import { setUsername, setRole } from "../user/user.slice";


const initialState = {
    isLoading: false,
    isLoggedIn: false,
    loginData: {},
    error: {},
    accessToken: "",
};


export const loginUser = createAsyncThunk("auth/loginUser", async (payload, thunkApi) => {
    try {
        const state = thunkApi.getState();
        const userData = {
            ...payload,
        };
        console.log("User login data : ", userData);
        setLoginData(userData);
        const resp = await authAPI.post("/login", userData);
        thunkApi.fulfillWithValue(resp.data);
    } catch (error) {
        thunkApi.rejectWithValue(error);
    }
});



export const registerUser = createAsyncThunk("auth/registerUser", async (payload, thunkApi) => {
    const state = thunkApi.getState();
    console.log("Register state : ", state);
    console.log("Register payload : ", payload);
    try {
        const resp = await authAPI.post("/register", payload);
        if (resp.status === 201) {
            thunkApi.fulfillWithValue(resp.data);
        } else {
            thunkApi.rejectWithValue(resp.data);
        }
    } catch (error) {
        console.log("Error while registring.");
        console.error(error);
        thunkApi.rejectWithValue(error);
    }
});
export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setLoggedIn: (state, { payload }) => {
            state.isLoggedIn = payload?.isLoggedIn;
        },
        setLoginData: (state, { payload }) => {
            state.loginData = payload;
        },
        setAccessToken: (state, { payload }) => {
            state.accessToken = payload?.accessToken;
        },
        setError: (state, { payload }) => {
            state.error = payload?.error;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.accessToken = action.payload?.accessToken;
                setUsername(state.loginData?.username);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                console.log("Login error : ", action.error);
                state.error = action.error;

            });
    }
});


export const { setAccessToken, setError, setLoggedIn, setLoginData } = authSlice.actions;
export const authReducer = authSlice.reducer;