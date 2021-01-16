//Tạo state ban đầu
let initialState = {
    by: 'name',
    value: 1
};

//Tạo hàm reducer là callback của hàm createStore nhận 2 tham số là state và action
let sortReducer = (state = initialState, action) => {
    switch(action.type) {
            
        case 'SORT':
            let stateSort = {...state};
            stateSort = {
                by: action.sort.by,
                value: action.sort.value
            }
            return stateSort;
            


        default:
            return state;
    }
    
}

export default sortReducer