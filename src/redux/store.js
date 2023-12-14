import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/product.slice';
import { userReducer } from './user/user.slice';
import { authReducer } from './auth/auth.slice';
import { shopReducer } from './shop/shop.slice';
import { filtersReducer } from './filters/filters.slice';
import { homeReducer } from './home/home.slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        shopPage: shopReducer,
        home : homeReducer,
        auth: authReducer,
        filters: filtersReducer
    }
});