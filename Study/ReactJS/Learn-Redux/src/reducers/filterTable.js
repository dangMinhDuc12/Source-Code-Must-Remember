import * as types from '../constants/actiontypes';

const initialState = {
    filterName: '',
    filterStatus: -1
};

const filterTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
    
            return {
                ...action.filter,
                filterName: action.filter.filterName.toLowerCase(),
                
            }
        
        


        default:
            return state;
    }
}

export default filterTaskReducer;