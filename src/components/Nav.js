import { Component } from "react";
import {messageAction} from '../actions/messageActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import messageReducer from '../reducers/messageReducer';



class Nav extends Component{

    state = {currentMessage: "not set yet"}

    updateMessage = (e) => {
        this.setState({currentMessage: e.target.value})
    }

    updateApplicationState = (e) => {
        e.preventDefault();
        this.props.messageAction(this.state.currentMessage);
    }
    render(){
        return(
            <div className='nav'>
                 <h5>All state in this app is managed by Redux.</h5>
                 <input onChange={this.updateMessage} />
                 <button onClick={this.updateApplicationState}>submit</button>
            </div>
            )
    }
}



 

const mapDispatchToProps = dispatch => bindActionCreators({
    messageAction,
  }, dispatch)
  
  export default connect(
    null,
    mapDispatchToProps
  )(Nav);