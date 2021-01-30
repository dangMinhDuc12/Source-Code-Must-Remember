const initialState = {};

const productEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {
                ...action.product,
            };

        default:
            return state;
    }
};

export default productEditReducer;
