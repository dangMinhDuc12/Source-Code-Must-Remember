import * as types from '../constants/actiontypes';

const initialState = {
    by: 'name',
    value: 1
};

const searchTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            
            return {
                by: action.sort.by,
                value: action.sort.value
            }
        
        


        default:
            return state;
    }
}

export default searchTaskReducer;