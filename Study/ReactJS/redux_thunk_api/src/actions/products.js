export const fetchProducts = () => async (dispatch) => {
    const res = await fetch('http://localhost:3004/products');
    const data = await res.json();
    dispatch({
        type: 'FETCH_DATA',
        data,
    });
};

export const deleteProducts = (id) => async (dispatch) => {
    await fetch(`http://localhost:3004/products/${id}`, {
        method: 'DELETE',
    });
    dispatch({
        type: 'DELETE_DATA',
        id,
    });
};

export const addProduct = (product) => async (dispatch) => {
    await fetch('http://localhost:3004/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    dispatch({
        type: 'REDIRECT',
    });
};

export const fetchDataWithId = (id) => async (dispatch) => {
    const res = await fetch(`http://localhost:3004/products/${id}`);
    const data = await res.json();
    dispatch({
        type: 'FETCH_DATA_ID',
        data,
    });
};

export const updateProduct = (product, id) => async (dispatch) => {
    await fetch(`http://localhost:3004/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    dispatch({
        type: 'REDIRECT',
    });
};
