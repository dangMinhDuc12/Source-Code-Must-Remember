import * as types from '../constants/actiontypes';

const initialState = {
    id: '',
    name: '',
    status: 'false'
};

const taskEditingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            
            return action.task;
        
        


        default:
            return state;
    }
}

export default taskEditingReducer;