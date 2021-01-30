export const fetchProducts = (products) => ({
    type: 'FETCH_DATA',
    products,
});

export const deleteProducts = (id) => ({
    type: 'DELETE_PRODUCT',
    id,
});

export const addProduct = () => ({
    type: 'REDIRECT',
});

export const fetchProductWithId = (product) => ({
    type: 'FETCH_PRODUCT',
    product,
});
