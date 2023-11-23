import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/product.slice';
import { userReducer } from './user/user.slice';
import { authReducer } from './auth/auth.slice';
import shopSlice from './shop/shop.slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        shopPage: shopSlice,
        auth: authReducer
    }
});