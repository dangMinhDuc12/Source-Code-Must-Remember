import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

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

        //Cách 1
        // Promise.resolve( this.setState({
        //     [name] : value
        // })).then(() => {
        //     this.props.filter(this.state.filterName, this.state.filterStatus);
        // })

        //Cách 2

        await Promise.resolve( this.setState({
                [name] : value
            }));
        
        this.props.filter(this.state.filterName, this.state.filterStatus);
        
    }



    


    render() {
        let {tasks} = this.props;
        let {filterName, filterStatus} = this.state;
        let elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                    key = {task.id}
                    index = {index}
                    task = {task}
                    update = {this.props.update}

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
        tasks: state.tasks
    }
}

export default connect(mapStateToProps) (TaskList)