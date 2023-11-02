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
        },
        setRole: (state, { payload }) => {
            state.role = payload.role;
        },
        addToWishlist: (state, { payload }) => {
            state.wishlist = [...state.wishlist, payload.itemId];
        },
        removeFromWishlist: (state, { payload }) => {
            state.wishlist = state.wishlist.filter(itemId => itemId != payload.itemId);
        },
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, {
                itemId: payload.itemId
            }];
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item.itemId != payload.itemId);
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