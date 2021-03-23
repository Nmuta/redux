import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import combineReducers from './reducers/index';


// export default () => createStore(rootReducer)
const store = ()=> createStore(combineReducers, devToolsEnhancer() );

export default store; 