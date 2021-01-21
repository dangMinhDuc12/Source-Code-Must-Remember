import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //Tất cả là -1, kích hoạt là 1, ẩn là 0
        }
    }


    change =  async (e) => {
        let name = e.target.name;
        let value = e.target.type === 'select-one' ? Number(e.target.value) : e.target.value;

        await Promise.resolve( this.setState({
                [name] : value
            }));
        
        this.props.onFilterTable(this.state);
        
    }



    


    render() {
        let {tasks, filterTask, searchTask, sort} = this.props;
        
        

        //Filter
        if(filterTask) {
            if(filterTask.filterName) {
                tasks = tasks.filter(task => {
                    return task.name.toLowerCase().includes(filterTask.filterName);
                });
            }
            tasks = tasks.filter(task => {
                if(filterTask.filterStatus === -1) {
                    return task;
                }else {
                    return task.status === (filterTask.filterStatus === 1 ? 'true': 'false');
                }
            });
        };


        //Search

        if(searchTask) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().includes(searchTask);
            })
        }


        //Sort
        if(sort.by === 'name') {
            tasks.sort((a, b) => {
            if(a.name > b.name) return sort.value
            else if(a.name < b.name) return -sort.value
            else return 0
            })
        }else {
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sort.value
                else if(a.status < b.status) return sort.value
                else return 0
                
            })
        }

        let {filterName, filterStatus} = this.state;
        let elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                    key = {task.id}
                    index = {index}
                    task = {task}

                    />
        })

        


        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                        <input 
                        type="text" 
                        className="form-control" 
                        name = "filterName"
                        value = {filterName}
                        onChange={this.change}
                        />
                        </td>
                        <td>
                        <select 
                        className="form-control"
                        name = "filterStatus"
                        value = {filterStatus}
                        onChange={this.change}
                        >
                            <option value={-1}>Tất Cả</option>
                            <option value={0}>Ẩn</option>
                            <option value={1}>Kích Hoạt</option>
                        </select>
                        </td>
                        <td></td>
                    </tr>
                    
                    {elmTasks}

                </tbody>
        </table>
        )
    }
}


// Dùng connect kết nối đến store và lấy về state của reducer chuyển thành props

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTask: state.filterTask,
        searchTask: state.searchTask,
        sort: state.sortTask
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskList);