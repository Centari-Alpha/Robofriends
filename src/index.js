import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
import App from './containers/App.js';
// import CardList from './CardList';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = 
	createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
	<Provider  store={store}>
		<App/>
	</Provider>, document.getElementById('root'));
