import { productsAPI } from "./productsAPI";
export async function getAllProducts(page, limit) {
    try {
        const resp = await productsAPI.get(`/all`, {
            params: { page: page || 1, limit: limit || 6 }
        });
        if (resp.status === 200) {
            return resp.data;
        } else {
            console.error(resp);
            return {
                status: resp.response.status,
                data: resp.data
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: error.response.status,
            message: error.message
        };
    }
}


export async function getProductByName(name) {
    try {
        const resp = await productsAPI.get("/search", {
            params: { name }
        });
        if (resp.status === 200) return resp.data;
        else if(resp.status === 404) {
            console.log("Search: ", resp.status);
            console.log("Search: ", resp.data);
            return []
        }
    } catch (error) {
        console.error(error);
        return {
            status: error.response.status,
            message: error.message
        };
    }
}
export async function getProductOfCategory(category) {
    try {
        const resp = await productsAPI.get(`/category/${category}`);
        if (resp.status === 200) { return resp.data; }
        else {
            console.error(resp);
            return {
                status: resp.response.status,
                data: resp.data
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: error.response.status,
            message: error.message
        };
    }
}


export async function addNewProduct(product) {
    try {
        const resp = await productsAPI.post("/", product);
        if (resp.status === 200) return resp.data;
        else {
            console.error(resp);
            return {
                status: resp.response.status,
                data: resp.data
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: error.response.status,
            message: error.message
        };
    }
};


export async function deleteProduct(productID) {
    try {
        const resp = await productsAPI.delete(`/${productID}`);
        if (resp.status === 200) { return resp.data; }
        else {
            console.error(resp);
            return {
                status: resp.response.status,
                data: resp.data
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: error.response.status,
            message: error.message
        };
    }
};


export async function updateProduct(productID, payload) {
    try {
        const resp = await productsAPI.put(`/${productID}`, payload);
        if (resp.status === 200) { return resp.data; }
        else {
            console.error(resp);
            return {
                status: resp.response.status,
                data: resp.data
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: error.response.status,
            message: error.message
        };
    }
};


export async function filterProducts(company, category, price, page, limit) {
    const filters = {
        page: page ?? 1,
        limit: limit ?? 6
    };

    if(company) filters.company = company;
    if(category) filters.category = category;
    if(price) filters.price = price;
    console.log("Filters applied : ", filters);
    try {
        const resp = await productsAPI.get('/filter', {
            params: filters
        });
        if (resp.status === 200) {
            return resp.data;
        } else {
            console.error(resp);
            return {
                status: resp.response.status,
                data: resp.data
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: error.response.status,
            message: error.message
        };
    }
}



export async function getProductByID(productID) {
    let product;
    try {
        const resp = await productsAPI.get(`/product/${productID}`);
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