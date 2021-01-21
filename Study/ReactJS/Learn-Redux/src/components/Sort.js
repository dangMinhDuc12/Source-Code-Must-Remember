import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


class Sort extends Component {
    
    click =  (by, value) => {

        this.props.sortTask({
            by,
            value
        });
        
    }

    checkSelected = (by, value) => {
        if(this.props.sort.by === by && this.props.sort.value === value) {
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


const mapStateToProps = (state) => {
    return {
        sort: state.sortTask
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sortTask: (sort) => {
            dispatch(actions.sortTask(sort))
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps) (Sort)