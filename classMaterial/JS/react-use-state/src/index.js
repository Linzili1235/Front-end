import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {WeatherMainPage} from "./WeatherMainPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherMainPage />
  </React.StrictMode>
);

