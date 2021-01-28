const initialState = [
    {
        id: 1,
        name: 'Iphone 12 promax',
        price: 400,
        status: 'true',
    },
    {
        id: 2,
        name: 'Samsung 12 promax',
        price: 500,
        status: 'false',
    },
    {
        id: 3,
        name: 'Realme 12 promax',
        price: 600,
        status: 'true',
    },
];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;
