import './WeatherPanel.scss'
import {useState} from "react";
export const WeatherPanel = ({city,closeMe}) =>{
    console.log('===.WeatherPanel',city)
    const [counter, updateCounter] = useState(1)
    return <div className='panelContainer'>
        <h2>{city}</h2>
        <p>details {counter}</p>
        <button onClick={() => {
            updateCounter(prevState => ++prevState)
            !!closeMe && closeMe()
        }
        }>click</button>

    </div>
}