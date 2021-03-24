import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
    messageReducer, itemsReducer
}) 