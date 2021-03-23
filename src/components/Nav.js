import { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMessage } from '../actions/updateMessage'
import { resetMessage } from '../actions/resetMessage'


class Nav extends Component{

    state = {currentMessage: "not set yet"}

    updateLocalMessage = (e) => {
        e.preventDefault();
        console.log("setting new local state to ", e.target.value);
        this.setState({message: e.target.value})
    }

    updateApplicationState = (e) => {
        // here is where application state would be set 
        e.preventDefault();
        this.props.updateMessage(this.state.message);
    }

    resetStuff = (e) => {
        e.preventDefault();
        this.props.resetMessage(this.state.message);
    }

    render(){
        return(
            <div className='nav'>
                 <h5>All state in this app is managed by Redux.</h5>
                 <input onChange={this.updateLocalMessage} />
                 <button onClick={this.updateApplicationState}>submit</button>
                 <button onClick={this.resetStuff}>RESET</button>
            </div>
            )
    }
}



const mapDispatchToProps = dispatch => bindActionCreators({
    updateMessage, resetMessage
  }, dispatch)
  
export default connect(
    null,
    mapDispatchToProps
  )(Nav);