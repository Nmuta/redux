import {UPDATE_MESSAGE} from '../actions/updateMessage';
import {RESET_MESSAGE} from '../actions/resetMessage';

const initialState = {
    message: "not set yet",
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_MESSAGE: 
        return {...state, message: action.payload}
      case RESET_MESSAGE: 
        return {...state, message: "message reset"}
      default:
        return state
    }
  }