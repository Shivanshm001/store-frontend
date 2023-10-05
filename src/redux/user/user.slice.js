import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    username: "",
    role: "",
    wishlist: [],
    cart: [],
}



export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, { payload }) => {
            state.username = payload.username;
        },
        setRole: (state, { payload }) => {
            state.tag = payload.tag;
        },
        addToWishlist: (state, { payload }) => {
            state.wishlist = [...state.wishlist, payload.itemId]
        },
        removeFromWishlist: (state, { payload }) => {
            state.wishlist = state.wishlist.filter(itemId => itemId != payload.itemId);
        },
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, payload.itemId]
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(itemId => itemId != payload.itemId);
        },
    }
});

export const {
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    setTag,
    setUsername
} = userSlice.actions;


export const userReducer = userSlice.reducer;