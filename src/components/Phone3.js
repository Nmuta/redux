import React, { Component } from "react";
import {connect} from "react-redux";

import '../App.css';
const phone3initalText = "our new component";


class Phone3 extends Component {

    render(){
        return(
            <div className="phone-block">
                {<div className="iphone">{phone3initalText}</div>}
               
            </div>)
    }

}



const mapStateToProps = state => {
    const {messageReducer} = state;
    return {message: messageReducer.message} 
}

export default connect(mapStateToProps)(Phone3);