import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/product.slice';
import { userReducer } from './user/user.slice';
import { authReducer } from './auth/auth.slice';
import { shopReducer } from './shop/shop.slice';
import { homeReducer } from './home/home.slice';
import { searchReducer } from './search/search.slice';

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