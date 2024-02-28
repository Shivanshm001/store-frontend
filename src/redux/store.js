import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from 'redux/products/product.slice';
import { userReducer } from 'redux/user/user.slice';
import { authReducer } from 'redux/auth/auth.slice';
import { shopReducer } from 'redux/shop/shop.slice';
import { homeReducer } from 'redux/home/home.slice';
import { searchReducer } from 'redux/search/search.slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        shopPage: shopReducer,
        home: homeReducer,
        search: searchReducer,
        auth: authReducer,
    }
});