const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return [...action.data];

        case 'DELETE_DATA':
            const stateAfterDelete = [...state];
            const indexToDelete = stateAfterDelete.findIndex((product) => product.id === action.id);
            stateAfterDelete.splice(indexToDelete, 1);
            return [...stateAfterDelete];

        case 'REDIRECT':
            const stateAfterRedirect = [...state];
            return [...stateAfterRedirect];
        default:
            return state;
    }
};

export default productsReducer;
