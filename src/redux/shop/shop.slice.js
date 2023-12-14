import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts, filterProducts } from '../../api/productApi/productApiControllers';

const initialState = {
    isLoading: false,
    error: null,
    products: [],
    currentPage: 1,
    totalPages: 1
};


export const filterPageData = createAsyncThunk('shopPage/filterProducts', async (payload, thunkApi) => {
    console.log("Shop filter payload ", { ...payload.filters });
    try {
        const resp = await filterProducts({ ...payload.filters }); //Shallow copy of filters object
        console.log("Filter response ", resp);
        if (resp) return resp;
    } catch (error) {
        console.log(error);
        thunkApi.rejectWithValue(error);
    }
});
export const fetchPageData = createAsyncThunk('shopPage/fetchPageData', async (payload, thunkApi) => {
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
                state.error = null;
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
                state.products = action.payload.products;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(filterPageData.rejected, (state, action) => {
                state.error = action.payload.error;
                state.isLoading = false;
            });
    }
});

export const { setData } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;