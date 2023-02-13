import {useState} from "react";

export const InputTypeChange = ({addToCart}) => {
    const [isText, updateIsText] = useState(false)
    const clickHandler = () => {
        updateIsText(!isText)
    }
    return <div className='inputContainer'>
        <h2>click to {isText? 'hide': 'show' } your password</h2>
        <input type={isText? 'text': 'password'}/>
        <button onClick={() => {
            clickHandler()
            addToCart()
        }}>click</button>
    </div>
}