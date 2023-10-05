import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/product.slice';
import { userReducer } from './user/user.slice';
import { authReducer } from './auth/auth.slice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
        auth: authReducer
    }
});