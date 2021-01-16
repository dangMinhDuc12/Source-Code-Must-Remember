import {combineReducers} from 'redux';
import tasksReducer from './tasks'

const myReducer = combineReducers({
    tasks: tasksReducer
});

export default myReducer;