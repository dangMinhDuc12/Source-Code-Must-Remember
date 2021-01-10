import React, { Component } from 'react'
import '../test.css';

export default class Result extends Component {

    style = () => {
        return { 
            borderColor: this.props.color, 
            color: this.props.color, 
            fontSize: this.props.fontSize
        }
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 test">
                <p>Color : { this.props.color } - Fontsize : { this.props.fontSize }px</p> 
                <div id="content" style = { this.style() } >
                    Nội dung setting
                </div>
            </div>
        )
    }
}
