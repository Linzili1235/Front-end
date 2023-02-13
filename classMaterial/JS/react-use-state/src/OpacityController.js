import './OpacityController.scss'
import {useState} from "react";
export const OpacityController = () => {

    const [value, updateValue] = useState(0.5)
    return <div className='opacityContainer'>
        <h2>slide to change the opacity</h2>
        <input type="range"
               min={0}
               max={1}
               step={0.1}
               value={value}
               onChange={(e)=>updateValue(e.target.value)}

        />
        <div style={{'opacity': value}} className='square'></div>
    </div>
}