import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    role: "",
    wishlist: [],
    cart: [],
};



export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, { payload }) => {
            state.username = payload.username;
            console.log("Username",state.username)
        },
        setRole: (state, { payload }) => {
            state.role = payload.role;
        },
        addToWishlist: (state, { payload }) => {
            state.wishlist = [...state.wishlist, payload.productID];
        },
        removeFromWishlist: (state, { payload }) => {
            state.wishlist = state.wishlist.filter(productID => productID != payload.productID);
        },
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, {
                productID: payload.productID
            }];
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item.productID != payload.productID);
        },
    }
});

export const {
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    setRole,
    setUsername
} = userSlice.actions;


export const userReducer = userSlice.reducer;