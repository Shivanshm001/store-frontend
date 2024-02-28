import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductByName } from '../../api/productApi/productApiControllers';

const initialState = {
    products: [],
    isLoading: false,
    formIsFocused: false,
    error: null
};


export const searchProductByName = createAsyncThunk('search/searchProductByName', async (payload, thunkApi) => {
    try {
        const resp = await getProductByName(payload.name);
        if (resp) return resp;
        else thunkApi.rejectWithValue(null);
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const searchSlice = createSlice({
    initialState,
    name: 'search',
    reducers: {
        setFormIsFocused: (state, action) => {
            state.formIsFocused = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchProductByName.pending, (state, action) => {
                state.isLoading = true;
                state.products = [];
            })
            .addCase(searchProductByName.fulfilled, (state, action) => {
                if (action.payload.products === null) state.products = [];
                else state.isLoading = false;
                state.products = action.payload.products;
            })
            .addCase(searchProductByName.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.error = action.payload.error;
            });
    }
});


export const { setFormIsFocused } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;