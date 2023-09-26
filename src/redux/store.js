import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/productsSlice';
import { userReducer } from './user/userSlice';

export const store = configureStore({ reducer: {
    users: userReducer,
    products: productReducer,
}})