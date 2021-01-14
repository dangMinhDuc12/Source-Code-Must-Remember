import React, { Component } from 'react'

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: 'name', 
                value: 1
            }
        }
    }
    
    click = async (by, value) => {
        await Promise.resolve( this.setState({
            sort: {
                by,
                value
            }
        }))
        this.props.sort(this.state.sort);
        
    }

    checkSelected = (by, value) => {
        if(this.state.sort.by === by && this.state.sort.value === value) {
            return 'sort_selected'
        }
    }


    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={(e) => {
                            e.preventDefault();
                            this.click('name', 1)
                        }}>
                            <a role="button" href="a" className={this.checkSelected('name', 1)}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={(e) => {
                            e.preventDefault();
                            this.click('name', -1)
                        }}>
                            <a role="button" href="a" className={this.checkSelected('name', -1)}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={(e) => {
                            e.preventDefault();
                            this.click('status', 1)
                        }}><a href="a" role="button" className={this.checkSelected('status', 1)}>Trạng Thái Kích Hoạt</a></li>
                        <li onClick={(e) => {
                            e.preventDefault();
                            this.click('status', -1)
                        }}><a href="a" role="button" className={this.checkSelected('status', -1)}>Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
