import {createStore, applyMiddleware, compose} from 'redux'
import {combineReducers} from 'redux';
import {numbersActionsHandler} from './numberSelector'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    numberSelector: numbersActionsHandler
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);