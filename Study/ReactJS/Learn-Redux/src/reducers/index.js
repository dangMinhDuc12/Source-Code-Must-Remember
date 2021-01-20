import {combineReducers} from 'redux';
import tasksReducer from './tasks';
import displayFormReducer from './displayForm';
import taskEditingReducer from './taskEditting';

const myReducer = combineReducers({
    tasks: tasksReducer,
    displayForm: displayFormReducer,
    taskEditing: taskEditingReducer
});

export default myReducer;