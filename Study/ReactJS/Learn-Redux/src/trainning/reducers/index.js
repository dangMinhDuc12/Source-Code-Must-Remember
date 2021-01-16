import statusReducer from './status.js';
import sortReducer from './sort.js';

//Combine reducer, kết hợp các reducer
import {combineReducers}  from 'redux';

const myReducer = combineReducers({
    status: statusReducer,
    sort: sortReducer
})




export default myReducer