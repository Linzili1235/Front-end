import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import reducers from "./reducers";
import {createStore} from "redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers)
root.render(
    <Provider store={store}>
        <App />
    </Provider>


);
