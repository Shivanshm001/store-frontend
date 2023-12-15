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


export async function getProductByName(name) {
    try {
        const resp = await productsAPI.get("/search", {
            params: { name }
        });
        if (resp.status === 200) return resp.data;
        else {
            console.error("Product not found", resp.data);
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


export async function getProductByID(productID) {
    let product;
    try {
        const resp = await productsAPI.get(`/${productID}`);
        if (resp.status === 200) {
            product = resp.data;
            return product;
        } else {
            console.error("Product not found", error);
            return null;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}