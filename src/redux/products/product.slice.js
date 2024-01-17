import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getAllProductsRedux,
    getProductOfCategoryRedux,
    addNewProductRedux,
    deleteProductRedux,
    updateProductRedux,
    getProductByIDRedux

} from "./productActions";

const initialState = {
    isLoading: false,
    error: {},
    product: {},
    products: [],
};



export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        }
    },

    extraReducers: (builder) => {
        //Get all products
        builder
            .addCase(getAllProductsRedux.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProductsRedux.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload.products;
            })
            .addCase(getAllProductsRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });

        //Add a new product
        builder
            .addCase(addNewProductRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(addNewProductRedux.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload.product;
            })
            .addCase(addNewProductRedux.pending, (state, action) => {
                state.isLoading = true;
            });

        //Delete product
        builder
            .addCase(deleteProductRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(deleteProductRedux.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload.product;
            })
            .addCase(deleteProductRedux.pending, (state, action) => {
                state.isLoading = true;
            });

        //Update product info
        builder
            .addCase(updateProductRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(updateProductRedux.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload.product;
            })
            .addCase(updateProductRedux.pending, (state, action) => {
                state.isLoading = true;
            });

        //Get product of a selected category
        builder
            .addCase(getProductOfCategoryRedux.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductOfCategoryRedux.fulfilled, (state, action) => {
                console.log("Categoty Payload", action.payload);
                state.isLoading = false;
                state.products = action.payload?.products;
            })
            .addCase(getProductOfCategoryRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
            //Get single product

            builder
            .addCase(getProductByIDRedux.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductByIDRedux.fulfilled, (state, action) => {
                console.log("Product Payload", action.payload);
                state.isLoading = false;
                state.product = action.payload?.product;
            })
            .addCase(getProductByIDRedux.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
        },
});

export const productReducer = productsSlice.reducer;

