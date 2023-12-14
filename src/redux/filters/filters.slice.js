import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: '',
    company: '',
    price: null,
};


const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, { payload }) => {
            state.category = payload.category;
        },
        setCompany: (state, { payload }) => {
            state.company = payload.company;
        },
        setPrice: (state, { payload }) => {
            state.price = payload.price;
        }

    }
});

export const { setCategory, setCompany, setPrice } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;