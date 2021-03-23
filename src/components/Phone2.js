import React, { Component } from "react";
import { connect } from 'react-redux'

import '../App.css';
const androidInitialText = "android text";


class Phone2 extends Component {

    render(){
        return(
            <div className="phone-block">
                <div className="android">{this.props.message}</div> 
            </div>)
    }

}


const mapStateToProps = state => {
    const {messageReducer} = state;
    return {message: messageReducer.message}
}

export default connect(mapStateToProps)(Phone2);