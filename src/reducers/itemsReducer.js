
import {
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILED,
  } from '../actions/getItems'
  
  const initialState = []
  
  const state = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ITEMS_SUCCESS:
        return [...action.payload]
      case FETCH_ITEMS_FAILED:
        return action.payload
      default:
        return state
    }
  }

export default state;