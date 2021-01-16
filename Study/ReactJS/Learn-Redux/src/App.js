import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.js';
import Control from './components/Control.js';
import TaskList from './components/TaskList.js';
import './trainning/demo.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            sort: {
                by: 'name', //Sắp xếp theo tên
                value: 1 //Sắp xếp tăng dần
            }
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
        if(this.state.isDisplayForm && this.state.taskEditing) {
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            })
        }else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null
            })
        }
        
    }
    closeForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }

    showForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }

    submit = (data) => {
        let {tasks} = this.state;
        if(!data.id) {
            data.id = this.generateID();
            tasks.push(data);
        }else {
            let index = this.findIndex(data.id);
            tasks[index] = data
        }
    
        this.setState({
            tasks: tasks,
            taskEditing: null
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

    delete = (id) => {
        let {tasks} = this.state;
        let index = this.findIndex(id);
        if(index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.closeForm();
        

    }

    update = (id) => {
        let {tasks} = this.state;
        let index = this.findIndex(id);
        this.setState({
            taskEditing: tasks[index]
        })
        this.showForm();
        
        
    }

    //Filter 
    filter = (filterName, filterStatus) => {
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }

    //Search
    search = (keyword) => {
        this.setState({
            keyword: keyword.toLowerCase()
        })

    }

    //Sort
    sort = async (sort) => {
        await Promise.resolve( this.setState({
            sort: {
                by: sort.by, 
                value: sort.value
            }
        }));
        
        
    }



    // componentDidUpdate() {
    //     console.log(this.state.taskEditing);
    // }


    

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
        let {tasks, isDisplayForm, taskEditing , filter, keyword, sort} = this.state;
        if(filter) {
            if(filter.name) {
                tasks = tasks.filter(task => {
                    return task.name.toLowerCase().includes(filter.name) 
                })
            }
            tasks = tasks.filter(task => {
                if(filter.status === -1) {
                    return task
                }else {
                    return task.status === (filter.status === 1 ? true: false)
                }
            })
        }
        if(keyword) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().includes(keyword) 
            })
        }
        //a và b là từng phần tử của mảng, return về số lớn hơn không thì sẽ là sắp xếp giảm dần để số to lên trước, trả về nhỏ hơn không sẽ là tăng dần để số nhỏ lên trước
        if(sort.by === 'name') {
            tasks.sort((a, b) => {
                if(a.name > b.name) {
                    return sort.value
                }else if(a.name < b.name) {
                    return -sort.value
                }
                else {
                    return 0
                }
            })
        }else {
            tasks.sort((a, b) => {
                if(a.status > b.status) {
                    return -sort.value
                }else if(a.status < b.status) {
                    return sort.value
                }
                else {
                    return 0
                }
            })
        }

        let elmTaskForm = isDisplayForm 
            ? <TaskForm  closeForm = {this.closeForm} submit = {this.submit} taskEditing = {taskEditing}/> 
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
                            
                                <Control 
                                search = {this.search}
                                sort = {this.sort}
                            
                                />
                            
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                            
                                updateStatus = {this.updateStatus}
                                delete = {this.delete}
                                update = {this.update}
                                filter = {this.filter}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


