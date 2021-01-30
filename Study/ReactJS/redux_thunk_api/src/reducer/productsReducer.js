const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return [...action.products];

        case 'DELETE_PRODUCT':
            const newStateAfterDeleteProduct = [...state];
            const indexToDelete = newStateAfterDeleteProduct.findIndex(
                (product) => product.id === action.id
            );
            newStateAfterDeleteProduct.splice(indexToDelete, 1);
            return [...newStateAfterDeleteProduct];

        case 'REDIRECT':
            return state;

        default:
            return state;
    }
};

export default productsReducer;
