import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsAPI } from '../../api/productsAPI';

const initialState = {
    isLoading: false,
    error: null,
    filters: {},
    products: [],
    currentPage: 1,
    totalPages: 1
};

export const fetchPageData = createAsyncThunk('shopPage/fetchPageData', async (payload, thunkApi) => {
    try {
        const resp = await productsAPI.get(`/all?page=${payload.page || 1}&limit=6`);
        return resp.data;
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue(error);
    }
});


export const filterPageData = createAsyncThunk('shopPage/filterPageData', async (payload, thunkApi) => {
    try {
        const resp = await productsAPI.get(`/filter`, { ...payload.filters });
        return resp.data;
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
        setFilters: (state, action) => {
            state.filters = action.payload.filters;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPageData.pending, (state) => {
                state.status = 'loading';
                state.isLoading = true;
            })
            .addCase(fetchPageData.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchPageData.rejected, (state, action) => {
                state.error = action.payload.error;
                state.isLoading = false;
            });
    }
});

export const { setData, setFilters } = shopSlice.actions;
export default shopSlice.reducer;