import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// What follows is a redux reducer to keep track of the current feedback 
// being entered as the user proceeds through several form pages

// Entering an example blank object for our initial state

const defaultFeedbackObject = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
    flagged: false,
    date: ''
}

const currentFeedback = (state = defaultFeedbackObject, action) => {
    if (action.type === 'ADD_FEELING') {
        // adding a feeling key/value to the empty state object
        return {...state, ...action.payload};
    } else if (action.type === 'ADD_UNDERSTANDING') {
        // adding an understanding key/value to current state object
        return {...state, ...action.payload};
    } else if (action.type === 'ADD_SUPPORT') {
        // adding a support key/value to current state object
        return {...state, ...action.payload};
    } else if (action.type === 'ADD_COMMENTS') {
        // adding a comments key/value to current state object
        return {...state, ...action.payload};
    } else if (action.type === 'ADD_DATE') {
        // adding a comments key/value to current state object
        return {...state, ...action.payload};
    } else if (action.type === 'RESET_FEEDBACK') {
        // adding a comments key/value to current state object
        return defaultFeedbackObject;
    }
    // if action doesn't match any listed types, return the previous state
    return state;
 }

// create a redux store
const store = createStore(
    combineReducers({
        currentFeedback
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
