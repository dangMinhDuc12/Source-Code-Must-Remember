import * as types from '../constants/actiontypes';

const data = JSON.parse(localStorage.getItem('tasks'));

const initialState = data;

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
            
    
        default:
            return state;
    }

}

export default tasksReducer