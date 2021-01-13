import React, { Component } from 'react';
import './styles/TaskItem.css'

export default class TaskItem extends Component {


    checkStatus = (status) => {
        if(status) {
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
                    <span className={this.checkStatus(task.status)} onClick = {() => this.props.updateStatus(task.id)}>
                        {task.status ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span> Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span> Xóa
                    </button>
                </td>
        </tr>
        )
    }
}
