import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/authAPI";



const initialState = {
    isLoading: false,
    isLoggedIn: false,
    error: {},
    accessToken: "",
};


export const loginUser = createAsyncThunk("auth/loginUser", async (payload, thunkApi) => {
    try {
        const state = thunkApi.getState();
        const resp = await authAPI.post("/login", state.loginData);
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
    }
});


export const { setAccessToken, setError, setLoggedIn, setLoginData, setRegisterData } = authSlice.actions;
export const authReducer = authSlice.reducer;