import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createStore from './stores';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
const { store } = createStore()

const rootElement =  document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

serviceWorker.unregister();
