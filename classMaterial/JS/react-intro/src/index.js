import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {WeatherMainPage} from "./WeatherMainPage";


// find id = 'root' element then render reactDOM(App) inside of it
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <WeatherMainPage/>


);


