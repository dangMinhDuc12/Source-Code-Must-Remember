import React, { Component } from 'react'

export default class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    UNSAFE_componentWillMount() {
        if(this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            })
        }
    }

    //lọt vào khi có sự thay đổi props
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            });
        }else if(!nextProps.taskEditing) {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }

    change = (e) => {
        let name = e.target.name;
        let value = e.target.type === 'select-one' ? !!e.target.value : e.target.value;
        this.setState({
            [name]: value
        })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.submit(this.state);

        //Hủy bỏ lưu form
        this.clearForm();
        this.props.closeForm();
    }

    clearForm = () => {
        this.setState({
            name: '',
            status: false
        })
        
    }


    render() {
        let {id} = this.state;
        return (
            <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title form-add">
                    {id ? 'Cập nhật công việc' : 'Thêm công việc'}
                    <span 
                    className="fa fa-times-circle form-add__exit"
                    onClick = {() => this.props.closeForm()}
                    
                    ></span>
                </h3>
                
            </div>
            <div className="panel-body">
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name = "name"
                        value = {this.state.name}
                        onChange = {this.change}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select 
                    className="form-control"
                    name = "status"
                    value = {this.state.status}
                    onChange = {this.change}
                    
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={this.clearForm}
                        >
                            Hủy Bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
