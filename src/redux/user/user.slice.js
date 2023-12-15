import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    role: "",
    wishlist: [],
    wishlistItems: [],
    cart: [],
    cartItems: []
};



export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, { payload }) => {
            state.username = payload.username;
            console.log("Username", state.username);
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
            state.cart = [...state.cart, payload.productID];
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(productID => productID != payload.productID);

        },
        setCartItemsRedux: (state, { payload }) => {
            state.cartItems = payload.cartItems;
        },
    }
});

export const {
    addToCart,
    setCartItemsRedux,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    setRole,
    setUsername
} = userSlice.actions;


export const userReducer = userSlice.reducer;