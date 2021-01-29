const initialState = {};

const productEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_ID':
            return action.data;

        default:
            return state;
    }
};

export default productEditReducer;
