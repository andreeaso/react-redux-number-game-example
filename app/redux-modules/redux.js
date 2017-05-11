import {createStore, applyMiddleware, compose} from 'redux'
import {combineReducers} from 'redux';
import {numbersActionsHandler} from './game'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    numbers: numbersActionsHandler
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);