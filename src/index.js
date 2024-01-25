import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {legacy_createStore as createStore} from 'redux';
import middleware from './middleware';
import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
