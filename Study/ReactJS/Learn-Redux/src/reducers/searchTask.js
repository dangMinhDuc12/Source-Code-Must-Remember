import * as types from '../constants/actiontypes';

const initialState = '';

const searchTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            
            return action.keyword.toLowerCase();
        
        


        default:
            return state;
    }
}

export default searchTaskReducer;