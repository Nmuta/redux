import { UPDATE_MESSAGE } from "../actions/updateMessage"

const initialState = {
    message: "nein",
  }
  
  const state = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_MESSAGE: 
        return {...state, message: action.payload}
      default:
        return state
    }
  }

  export default state;
