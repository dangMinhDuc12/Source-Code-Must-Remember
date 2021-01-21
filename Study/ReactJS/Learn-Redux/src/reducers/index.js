import {combineReducers} from 'redux';
import tasksReducer from './tasks';
import displayFormReducer from './displayForm';
import taskEditingReducer from './taskEditting';
import filterTaskReducer from './filterTable';
import searchTaskReducer from './searchTask';
import sortTaskReducer from './sortTask';




const myReducer = combineReducers({
    tasks: tasksReducer,
    displayForm: displayFormReducer,
    taskEditing: taskEditingReducer,
    filterTask: filterTaskReducer,
    searchTask: searchTaskReducer,
    sortTask: sortTaskReducer,
});

export default myReducer;