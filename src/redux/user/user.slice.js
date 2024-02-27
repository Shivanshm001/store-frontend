import { createSlice } from "@reduxjs/toolkit";
import { addToCartAsync, addToWishlistAsync, removeFromCartAsync, removeFromWishlistAsync, addToBuyNowAsync, removeFromBuyNowAsync } from './user.slice.actions';
const initialState = {
    username: "",
    role: "",
    wishlistProductsId: [],
    wishlistItems: [],
    cartProductsId: [],
    buyNowProductId: '',
    buyNowItem: {},
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
        setCartItemsRedux: (state, { payload }) => {
            state.cartItems = payload.cartItems;
        },
        setWishlistItemsRedux: (state, { payload }) => {
            state.wishlistItems = payload.wishlistItems;
        },
        setBuyNowItem: (state, { payload }) => {
            state.buyNowItem = payload.buyNowItem;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(addToCartAsync.fulfilled, (state, { payload }) => {
                state.cartProductsId = [...state.cartProductsId, payload];
            })
            .addCase(addToCartAsync.pending, (state, action) => { })
            .addCase(addToCartAsync.rejected, (state, action) => {
                console.log("REJECTED ADD TO CART ACTION");
            });
        builder
            .addCase(removeFromCartAsync.fulfilled, (state, { payload }) => {
                state.cartProductsId = state.cartProductsId.filter(productID => productID != payload);
            })
            .addCase(removeFromCartAsync.pending, (state, action) => { })
            .addCase(removeFromCartAsync.rejected, (state, action) => {
                console.log("REJECTED REMOVE FROM CART");
            });

        builder
            .addCase(addToBuyNowAsync.fulfilled, (state, { payload }) => {
                state.buyNow = payload;
            })
            .addCase(addToBuyNowAsync.pending, (state, action) => { })
            .addCase(addToBuyNowAsync.rejected, (state, action) => {
                console.log("REJECTED ADD TO BuyNow ACTION");
            });
        builder
            .addCase(removeFromBuyNowAsync.fulfilled, (state, { payload }) => {
                state.buyNow = state.buyNow.filter(productID => productID != payload);
            })
            .addCase(removeFromBuyNowAsync.pending, (state, action) => { })
            .addCase(removeFromBuyNowAsync.rejected, (state, action) => {
                console.log("REJECTED REMOVE FROM BuyNow");
            });

        builder
            .addCase(addToWishlistAsync.fulfilled, (state, { payload }) => {
                state.wishlistProductsId = [...state.wishlistProductsId, payload];
            })
            .addCase(addToWishlistAsync.pending, (state, action) => { })
            .addCase(addToWishlistAsync.rejected, (state, action) => {
                console.log("REJECTED ADD TO WISHLIST");
            });

        builder
            .addCase(removeFromWishlistAsync.fulfilled, (state, { payload }) => {
                state.wishlistProductsId = state.wishlistProductsId.filter(productID => productID != payload);
            })
            .addCase(removeFromWishlistAsync.pending, (state, action) => { })
            .addCase(removeFromWishlistAsync.rejected, (state, action) => {
                console.log("REJECTED REMOVE FROM WISHLIST");
            });
    }
});

export const {
    setCartItemsRedux,
    setWishlistItemsRedux,
    setRole,
    setUsername
} = userSlice.actions;


export const userReducer = userSlice.reducer;