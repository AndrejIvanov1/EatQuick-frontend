import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import ourApp from './reducers'
import './index.css';
import App from './components/app/App';
import Checker from './components/checker/Checker';

const loggerMiddleware = createLogger()

let store = createStore(
    ourApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

