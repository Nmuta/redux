import React, { Component } from "react";

import '../App.css';
const iphoneInitialText = "iphone text";


class Phone1 extends Component {

    render(){
        return(
            <div className="phone-block">
                {/* <div className="iphone">{iphoneInitialText}</div>  */}
                <div className="iphone">{this.props.message}</div> 
            </div>)
    }

}

export default Phone1;