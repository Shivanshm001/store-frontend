import { addNewProduct, deleteProduct, getAllProducts, getProductOfCategory, updateProduct } from "../../api/productApi/productApiControllers";
import { productsAPI } from "../../api/productApi/productsAPI";
import { createAsyncThunk } from '@reduxjs/toolkit';

//Get all products from the database
export const getAllProductsRedux = createAsyncThunk("products/getAllProducts", async (payload, thunkAPI) => {
    try {
        const resp = await getAllProducts(payload.page, 9);
        return resp;
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error);
    }
});



//Get products of a specific category
export const getProductOfCategoryRedux = createAsyncThunk("products/getProductOfCategory", async (payload, thunkAPI) => {
    try {
        const resp = await getProductOfCategory(payload.category);
        console.log("Response data", resp);
        if (resp) return resp.data;
        else {
            thunkAPI.rejectWithValue(resp.data);
        }
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error);
    }
});



//Add new product
export const addNewProductRedux = createAsyncThunk("products/addNewProduct", async (payload, thunkAPI) => {
    try {
        thunkAPI.dispatch(getAllProductsRedux());
        const resp = await addNewProduct(payload);
        if (resp) {
            thunkAPI.fulfillWithValue(resp.data);
            thunkAPI.dispatch(getAllProductsRedux());
        }
        else {
            thunkAPI.rejectWithValue(resp);
        }
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error);
    }
});


//Delete product using productID
export const deleteProductRedux = createAsyncThunk("products/deleteProduct", async (productID, thunkAPI) => {
    try {
        const resp = await deleteProduct(productID);
        if (resp) {
            thunkAPI.fulfillWithValue(resp.data);
            thunkAPI.dispatch(getAllProductsRedux());
        }
        else {
            thunkAPI.rejectWithValue(resp.data);
        }
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error);
    }
});



//Update product information using productID
export const updateProductRedux = createAsyncThunk("products/updateProduct", async (payload, thunkAPI) => {
    try {
        const resp = await updateProduct(payload?.productID, payload);
        thunkAPI.dispatch(getAllProductsRedux());
        return resp;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});
