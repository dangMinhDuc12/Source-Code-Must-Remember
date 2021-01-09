import React, { Component } from 'react'

export default class SizeSetting extends Component {

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : { this.props.fontSize }px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={ () => this.props.changeFontSize(-1) }>Giảm</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={ () => this.props.changeFontSize(1) } >Tăng</button>
                </div>
            </div>
)
    }
}
