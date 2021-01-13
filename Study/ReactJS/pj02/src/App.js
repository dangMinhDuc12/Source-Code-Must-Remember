import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.js';
import Control from './components/Control.js';
import TaskList from './components/TaskList.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false
        };
    }


    //Dùng lifecycle để lưu biến tasks, lifecycle dưới được dùng khi components chuẩn bị được render ra trình duyệt, khi f5 dữ liệu sẽ không mất
    UNSAFE_componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
        
    }

    //Handle form
    toggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }
    closeForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }

    submit = (data) => {
        let {tasks} = this.state;
        data.id = this.generateID();
        tasks.push(data);
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    updateStatus = (id) => {
        let {tasks} = this.state;
        let index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex = (id) => {
        let {tasks} = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            
            if(task.id === id) {
                result = index;
            }

        });
        return result;
        
    }


    

    //Tạo data mẫu
    // generateData = () => {
    //     let tasks = [
    //         {
    //             id: this.generateID(),
    //             name: 'Học lập trình ReactJS',
    //             status: true
    //         },
    //         {
    //             id: this.generateID(),
    //             name: 'Học lập trình NodeJS',
    //             status: false
    //         },
    //         {
    //             id: this.generateID(),
    //             name: 'Học lập trình VueJS',
    //             status: true
    //         },
    //     ];
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

    //Tạo ID random
    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID = () => {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    render() {
        let {tasks, isDisplayForm} = this.state;
        let elmTaskForm = isDisplayForm 
            ? <TaskForm  closeForm = {this.closeForm} submit = {this.submit}/> 
            : ''
        return (
                <div className="container">
                    <div className="text-center">
                        <h1>Quản Lý Công Việc</h1>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                            {elmTaskForm}
                        </div>
                        <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                            <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick = {this.toggleForm}
                            >
                                <span className="fa fa-plus mr-5"></span> Thêm Công Việc
                            </button>
                            {/* <button 
                            type="button" 
                            className="btn btn-danger ml-5"
                            onClick = {this.generateData}
                            >
                                Tạo dữ liệu mẫu
                            </button> */}
                            
                                <Control />
                            
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                tasks = {tasks}
                                updateStatus = {this.updateStatus}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


