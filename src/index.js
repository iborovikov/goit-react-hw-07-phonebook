import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import App from './App';

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));


