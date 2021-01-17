import {combineReducers} from 'redux';
import tasksReducer from './tasks';
import displayFormReducer from './displayForm';

const myReducer = combineReducers({
    tasks: tasksReducer,
    displayForm: displayFormReducer
});

export default myReducer;