import * as types from '../constants/actiontypes';



 

let findIndex = (tasks,id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        
        if(task.id === id) {
            result = index;
        }

    });
    return result;
    
}

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const data = JSON.parse(localStorage.getItem('tasks'));

const initialState = data ? data : [];

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;

        case types.SAVE_TASK:
            let stateAfterSaveTask = [...state];
            if(!action.task.id) {
                let newTask = {
                    id: generateID(),
                    name: action.task.name,
                    status: action.task.status
                }
                stateAfterSaveTask.push(newTask);
            }else {
                let indexToUpdate = findIndex(stateAfterSaveTask, action.task.id);
                stateAfterSaveTask[indexToUpdate] = action.task;
                
            }
        
            localStorage.setItem('tasks', JSON.stringify(stateAfterSaveTask));
            return stateAfterSaveTask;
        

        case types.UPDATE_STATUS_TASK:
            let stateAfterUpdateStatus = [...state];
            
    
            let index = findIndex(stateAfterUpdateStatus, action.id);

            let checkStatus = () => {
                if(stateAfterUpdateStatus[index].status === 'true') {
                    return 'false';
                }else {
                    return 'true';
                }
            }
            stateAfterUpdateStatus[index] = {
                ...stateAfterUpdateStatus[index],
                status: checkStatus()
            }
            localStorage.setItem('tasks', JSON.stringify(stateAfterUpdateStatus));
        
            return stateAfterUpdateStatus;

            case types.DELETE_TASK:
                let stateAfterDeleteTask = [...state];
                let indexToDelete = findIndex(stateAfterDeleteTask, action.id);
                if(indexToDelete !== -1) {
                    stateAfterDeleteTask.splice(indexToDelete, 1);
                    localStorage.setItem('tasks', JSON.stringify(stateAfterDeleteTask));
                    return stateAfterDeleteTask;
                }
                break;
                
    
        default:
            return state;
    }

}

export default tasksReducer