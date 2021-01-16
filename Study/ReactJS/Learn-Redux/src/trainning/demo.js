// // import {createStore} from 'redux';

// // //Tạo state ban đầu
// // let initialState = {
// //     status: false,
// //     sort: {
// //         by: 'name',
// //         value: 1
// //     }
// // };

// // //Tạo hàm reducer là callback của hàm createStore nhận 2 tham số là state và action
// // let myReducer = (state = initialState, action) => {
// //     switch(action.type) {
// //         case 'TOGGLE_STATUS':
// //             let stateToggle = {...state};
// //             stateToggle.status = !stateToggle.status;
// //             return stateToggle;
            
// //         case 'SORT':
// //             let stateSort = {...state};
// //             stateSort.sort = {
// //                 by: action.sort.by,
// //                 value: action.sort.value
// //             }
// //             return stateSort;
            


// //         default:
// //             return state;
// //     }
    
// // }

// // //Tạo store lưu trữ state
// // const store = createStore(myReducer);
// // console.log('Defalut', store.getState());

// // //Tạo ra action thay đổi status 
// // let action = {
// //     type: 'TOGGLE_STATUS'
// // };

// // //Truyền action vào function dispatch
// // store.dispatch(action);

// // console.log('TOGGLE_STATUS', store.getState());


// // //Action thay đổi state sort
// // let sortAction = {
// //     type: 'SORT',
// //     sort: {
// //         by: 'status',
// //         value: -1
// //     }
// // }

// // store.dispatch(sortAction);
// // console.log('SORT', store.getState());




// //Phân chia folder

// import {createStore} from 'redux';
// import * as action  from './actions/index.js'
// import myReducer from './reducers/index.js'


// //Tạo store lưu trữ state
// const store = createStore(myReducer);
// console.log('Defalut', store.getState());



// store.dispatch(action.statusAction);
// console.log('TOGGLE_STATUS', store.getState());

// store.dispatch(action.sortAction);
// console.log('SORT', store.getState());