import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "../../api/productsAPI";

const initialState = {
    isLoading: false,
    error: {},
    product: {},
    products: [],
    filteredProducts: []
};


const getAllProducts = createAsyncThunk("products/getAllProducts", async (_, thunkAPI) => {
    try {
        const resp = await productsAPI.get("");
        if (resp.status === 200) return resp.data;
        else {
            thunkAPI.rejectWithValue(resp.data)
        }
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error);
    }
});

const addNewProduct = createAsyncThunk("products/addNewProduct", async (payload, thunkAPI) => {
    try {
        const resp = await productsAPI.post("/", payload);
        thunkAPI.dispatch(getAllProducts());
        if (resp.status === 200) {
            thunkAPI.fulfillWithValue(resp.data);
            thunkAPI.dispatch(getAllProducts());
        }
        else {
            thunkAPI.rejectWithValue(resp.data)
        }
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error);
    }
})

const deleteProduct = createAsyncThunk("products/deleteProduct", async (productID, thunkAPI) => {
    try {
        const resp = await productsAPI.delete(`/${productID}`);
        if (resp.status === 200) {
            thunkAPI.fulfillWithValue(resp.data);
            thunkAPI.dispatch(getAllProducts());
        }
        else {
            thunkAPI.rejectWithValue(resp.data)
        }
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error);
    }
});



const updateProduct = createAsyncThunk("products/updateProduct", async (payload, thunkAPI) => {
    try {
        const resp = await productsAPI.put(`/${payload.productID}`, payload);
        thunkAPI.dispatch(getAllProducts());
        if (resp.status === 200) return resp.data;
        else {
            thunkAPI.rejectWithValue(resp.data)
        }
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})
export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload.products;
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        })

        builder.addCase(addNewProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        });

        builder.addCase(addNewProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload.product;
        });

        builder.addCase(addNewProduct.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        });

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload.product;
        });

        builder.addCase(deleteProduct.pending, (state, action) => {
            state.isLoading = true;
        });


        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        });

        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload.product;
        });

        builder.addCase(updateProduct.pending, (state, action) => {
            state.isLoading = true;
        })
    },

});

export {
    getAllProducts,
    addNewProduct,
    deleteProduct,
    updateProduct
}
export const productReducer = productsSlice.reducer;