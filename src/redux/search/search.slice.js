import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductByName } from '../../api/productApi/productApiControllers';

const initialState = {
    products: [],
    isLoading: false,
    error: null
};


export const searchProductByName = createAsyncThunk('search/searchProductByName', async (payload, thunkApi) => {
    try {
        const resp = await getProductByName(payload.name);
        if (resp) return resp;
    } catch (error) {
        thunkApi.rejectWithValue(error);
    }
});

const searchSlice = createSlice({
    initialState,
    name: 'search',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchProductByName.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(searchProductByName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload.products;
            })
            .addCase(searchProductByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
    }
});



export const searchReducer = searchSlice.reducer;