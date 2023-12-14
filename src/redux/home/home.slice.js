import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductOfCategory } from '../../api/productApi/productApiControllers';
const initialState = {
    sportsProducts: [],
    fashionProducts: [],
    error: [],
    isLoading: false
};

export const getSportsProducts = createAsyncThunk('home/getSportsProducts', async (_, thunkApi) => {
    try {
        const resp = await getProductOfCategory('sports');
        // console.log("Sports Products ", resp);
        // console.log("Sports Products ", Array.isArray(resp));
        if (resp) return resp;
    } catch (error) {
        thunkApi.rejectWithValue(error);
    }
});

export const getFashionProducts = createAsyncThunk('home/getFashionProducts', async (_, thunkApi) => {
    try {
        const resp = await getProductOfCategory('fashion');
        // console.log("Fashion Products ", resp);
        // console.log("Fashion Products ", typeof resp);
        if (resp) return resp;
    } catch (error) {
        thunkApi.rejectWithValue(error);
    }
});


const homeSlice = createSlice({
    initialState,
    name: 'home',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSportsProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSportsProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.sportsProducts = action.payload.products;
            })
            .addCase(getSportsProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
        builder
            .addCase(getFashionProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFashionProducts.fulfilled, (state, action) => {
                console.log("Fashion Payload", action.payload);
                state.isLoading = false;
                state.fashionProducts = action.payload.products;
            })
            .addCase(getFashionProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    }
});


export const homeReducer = homeSlice.reducer; 