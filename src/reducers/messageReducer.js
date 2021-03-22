import {MESSAGE_ACTION} from '../actions/messageActions';

const initialState = {
    message: "SIM card not yet"
}

export default function messageReducer(state = initialState, action) {
    console.log("my state is ", state.message);
    switch (action.type) {
        case MESSAGE_ACTION : 
        return {
            ...state, message: action.message
        }
        default: 
            return state
    }
}