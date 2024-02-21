import { createAsyncThunk } from '@reduxjs/toolkit';

export const addToCartAsync = createAsyncThunk("user/addToCartAsync", async ({ productID }, thunkAPI) => {
    console.log("ADD TO CART PAYLOAD : ", productID);
    if(!productID)
        console.log("ADD TO CART PAYLOAD IS NULL ", typeof productID);

    if (productID) return productID;
    else return thunkAPI.rejectWithValue(null);
});

export const removeFromCartAsync = createAsyncThunk("user/removeFromCartAsync", async ({ productID }, thunkAPI) => {
    console.log("REMOVE FROM CART PAYLOAD : ", productID);
    if (productID) return productID;
    else return thunkAPI.rejectWithValue(null);
});

export const addToWishlistAsync = createAsyncThunk("user/addToWishlistAsync", async ({ productID }, thunkAPI) => {
    console.log("ADD TO WISHLIST PAYLOAD : ", productID);
    if (productID) return productID;
    else return thunkAPI.rejectWithValue(null);
});

export const removeFromWishlistAsync = createAsyncThunk("user/removeFromWishlistAsync", async ({ productID }, thunkAPI) => {
    console.log("REMOVE WISHLIST PAYLOAD : ", productID);
    if (productID) return productID;
    else return thunkAPI.rejectWithValue(null);
});

export const addToBuyNowAsync = createAsyncThunk("user/addToBuyNowAsync", async ({ productID }, thunkAPI) => {
    if(!productID)
        console.log("ADD TO BUY NOW PAYLOAD IS NULL ", typeof productID);

    if (productID) return productID;
    else return thunkAPI.rejectWithValue(null);
});

export const removeFromBuyNowAsync = createAsyncThunk("user/removeFromBuyNowAsync", async ({ productID }, thunkAPI) => {
    if (productID) return productID;
    else return thunkAPI.rejectWithValue(null);
});