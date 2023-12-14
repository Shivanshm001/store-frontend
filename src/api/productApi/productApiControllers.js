import { productsAPI } from "./productsAPI";
export async function getAllProducts(page, limit) {
    try {
        const resp = await productsAPI.get(`/all?page=${page || 1}&limit=${limit}`);
        if (resp.status === 200) {
            return resp.data;
        } else {
            console.error(resp);
            return null;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function getProductOfCategory(category) {
    try {
        const resp = await productsAPI.get(`/category/${category}`);
        if (resp.status === 200) { return resp.data; }
        else {
            console.error(resp);
            return null;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}


export async function addNewProduct(product) {
    try {
        const resp = await productsAPI.post("/", product);
        if (resp.status === 200) return resp.data;
        else {
            console.error(resp);
            return null;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};


export async function deleteProduct(productID) {
    try {
        const resp = await productsAPI.delete(`/${productID}`);
        if (resp.status === 200) { return resp.data; }
        else {
            console.error(resp);
            return null;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};


export async function updateProduct(productID, payload) {
    try {
        const resp = await productsAPI.put(`/${productID}`, payload);
        if (resp.status === 200) { return resp.data; }
        else {
            console.error(resp);
            return null;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};


export async function filterProducts(filters) {
    try {
        const resp = await productsAPI.get('/filter', {
            params: filters
        });
        if (resp.status === 200) { return resp.data; }
        else {
            console.error(resp);
            return null;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}