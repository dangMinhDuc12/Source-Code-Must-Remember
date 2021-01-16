import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
    }

    change = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    search = () => {
        this.props.search(this.state.keyword)
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nhập từ khóa..."
                    name = "keyword"
                    value = {this.state.keyword}
                    onChange={this.change}
                    />
                    <span className="input-group-btn">
                        <button 
                        className="btn btn-primary" 
                        type="button"
                        onClick = {this.search}
                        >
                            <span className="fa fa-search mr-5"></span> Tìm
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}
