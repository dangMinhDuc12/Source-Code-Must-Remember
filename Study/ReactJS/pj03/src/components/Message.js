import React, { Component } from 'react';
import {connect} from 'react-redux';

class Message extends Component {
    render() {
        return (
            <h3>
                <span className="badge amber darken-2">{this.props.message}</span>
            </h3>
        )
    }
}



const mapStateToProps = (state) => ({
    message: state.message
})

const mapDispatchToProps = (dispatch) => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Message)



