//Tạo state ban đầu
let initialState = false;

//Tạo hàm reducer là callback của hàm createStore nhận 2 tham số là state và action
let statusReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_STATUS':
            let stateToggle = state;
            stateToggle = !stateToggle;
            return stateToggle;
            
        


        default:
            return state;
    }
    
}

export default statusReducer