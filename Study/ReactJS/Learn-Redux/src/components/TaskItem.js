import React, { Component } from 'react';
import './styles/TaskItem.css';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskItem extends Component {


    checkStatus = (status) => {
        if(status === 'true') {
            return 'label label-success cursor';
        }
        else {
            return 'label label-danger cursor';
        }
    }

    

    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={this.checkStatus(task.status)} onClick = {() => this.props.updateStatusTask(task.id)}>
                        {task.status === 'true' ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                    type="button" 
                    className="btn btn-warning" 
                    onClick={() => 
                    
                    {
                        this.props.onOpenForm()
                        this.props.onEditTask(task)
                    }
                    }>

                        <span className="fa fa-pencil mr-5"></span> Sửa
                    </button>
                    &nbsp;
                    <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick = {() => {
                        this.props.onDeleteTask(task.id);
                        this.props.onCloseForm();
                        }}>
                        <span className="fa fa-trash mr-5"></span> Xóa
                    </button>
                </td>
        </tr>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateStatusTask: (id) => {
            dispatch(actions.updateStatusTask(id));
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
    

    };
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);