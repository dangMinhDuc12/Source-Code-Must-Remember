import React, { Component } from 'react'

export default class Reset extends Component {



    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={ () => this.props.reset() }>Reset</button>
        )
    }
}
