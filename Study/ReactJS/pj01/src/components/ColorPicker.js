import React, { Component } from 'react'

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', 'pink']
        };
    }


    style = (color) => {
        return {
            backgroundColor : color 
        }
    }

    render() {
        let elmColors = this.state.colors.map((color, index) => {
            return (<span 
                        key = {index} 
                        style = { this.style(color) } 
                        className = { this.props.color === color ? 'active' : ''}
                        onClick = { () => this.props.receiveColor(color) }
                    ></span>)

                
        })
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        { elmColors }
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}
