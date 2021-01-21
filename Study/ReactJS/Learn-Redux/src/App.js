import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.js';
import Control from './components/Control.js';
import TaskList from './components/TaskList.js';
import './trainning/demo.js';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
    




    onToggleForm = () => {
        let taskEditing = this.props.taskEditing;
        if(taskEditing && taskEditing.id) {
            this.props.onClearTask({
                id: '',
                name: '',
                status: 'false'
            })
    
        }else {
            this.props.toggleForm();
        }
        
    }


    render() {
    


        let isDisplayForm = this.props.isDisplayForm;




    
        return (
                <div className="container">
                    <div className="text-center">
                        <h1>Quản Lý Công Việc</h1>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                            <TaskForm   /> 
                        </div>
                        <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                            <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick = {() => this.onToggleForm()}
                            >
                                <span className="fa fa-plus mr-5"></span> Thêm Công Việc
                            </button>
                            
                                <Control 
                                
                                sort = {this.sort}
                            
                                />
                            
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.displayForm,
        taskEditing: state.taskEditing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onClearTask: (task) => {
            dispatch(actions.editTask(task))
        }
    
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(App);