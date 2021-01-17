import * as types from '../constants/actiontypes';

const initialState = false; //Đóng FORM

const displayFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            let stateAfterToggleForm = state;
            return !stateAfterToggleForm;
        
        case types.OPEN_FORM:
            return true;

        case types.CLOSE_FORM:
            return false;


        default:
            return state;
    }
}

export default displayFormReducer