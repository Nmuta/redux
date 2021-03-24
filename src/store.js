import { createStore } from 'redux';
import combineReducers from './reducers/index';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = () => createStore(combineReducers,  devToolsEnhancer());

export default store;