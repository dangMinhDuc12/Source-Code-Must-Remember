



const initialState = 'Chào mừng đến với website';



const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MESSAGE':
            return action.message;


        default:
            return state;
    }
}

export default messageReducer;