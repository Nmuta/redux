import React, { Component } from "react";
import { connect } from 'react-redux'


import '../App.css';
const iphoneInitialText = "iphone text";


class Phone1 extends Component {

    render(){
        return(
            <div className="phone-block">
                {<div className="iphone">{this.props.message}</div>}
               
            </div>)
    }

}

 
// function mapStateToProps(state) {
//     const { todos } = state
//     return { todoList: todos.allIds }
//   }

const mapStateToProps = state => {
    const {messageReducer} = state;
    return {message: messageReducer.message}
}

export default connect(mapStateToProps)(Phone1);