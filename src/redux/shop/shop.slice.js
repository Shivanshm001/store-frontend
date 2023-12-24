import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts, filterProducts } from '../../api/productApi/productApiControllers';

const initialState = {
    isLoading: false,
    error: null,
    filtered: false,
    products: [],
    currentPage: 1,
    totalPages: 1
};


export const filterPageData = createAsyncThunk('shopPage/filterProducts', async (payload, thunkApi) => {
    console.log(payload);
    try {
        const resp = await filterProducts(payload?.company, payload?.category, payload?.price, payload.page, 6);
        return resp;
    } catch (error) {
        console.log("Error in filter redux : ", error);
    }
});



export const fetchPageData = createAsyncThunk('shopPage/fetchPageData', async (payload, thunkApi) => {
    console.log(payload.page)
    try {
        const resp = await getAllProducts(payload.page, 6);
        return resp;
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue(error);
    }
});



const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.products = action.payload?.products;
            state.currentPage = action.payload?.currentPage;
            state.totalPages = action.payload?.totalPages;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPageData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPageData.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.filtered = false;
                state.isLoading = false;
            })
            .addCase(fetchPageData.rejected, (state, action) => {
                state.error = action.payload.error;
                state.isLoading = false;
            });
        builder
            .addCase(filterPageData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(filterPageData.fulfilled, (state, action) => {
                console.log(action.payload);
                state.products = action.payload.products;
                state.totalPages = action.payload.totalPages;
                state.currentPage = action.payload.currentPage;
                state.filtered = true;
                state.isLoading = false;
            })
            .addCase(filterPageData.rejected, (state, action) => {
                state.error = action.payload?.error ?? null;
                state.isLoading = false;
            });
    }
});

export const { setData } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;