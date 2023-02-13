import './WeatherMainPage.scss'
// import {WeatherPanel} from "./WeatherPanel";
import {Counter} from "./Counter";
import {InputTypeChange} from "./InputTypeChange";
import {useState} from "react";
import {OpacityController} from "./OpacityController";
export const WeatherMainPage = () => {
    // let index = 1
    const [index, updateIndex] = useState(1)
    const phone = (name) => {
        // console.log('call me')
        // index++
        updateIndex(prevState => ++prevState )
        console.log(index,name)
    }

    // const cities = [
    //     'city1',
    //     'city2',
    //     'city3',
    //     'city4',
    //     'city5',
    //     'city6',
    //     'city7'
    // ]

    const [counter, updateCounter] = useState(1)

    const [quantity, updateQuantity] = useState(0)

    const addToCart = () => {
        updateQuantity(prevState => ++prevState)
    }

    return (
        <div>
            <h1>Weather Stack Main Page</h1>
            <p className='cart'>Quantity: {quantity}</p>
            <p>search your city</p>
            <input type="text"/>
            <input type="text" value={index}/>
            <p>this is the state: {counter}</p>
            <button onClick={
                () => updateCounter(prevCounter => ++prevCounter)
            }>increase state</button>
            <div className='regionalWeatherContainer'>
                {/*<WeatherPanel city={'Beijing'} details={'details about Beijing'} isActive={true}/>*/}
                {/*<WeatherPanel city={'Toronto'} details={'details about Toronto'}/>*/}
                {/*<WeatherPanel city={'Ottawa'} details={'details about Ottawa'} phone={phone}/>*/}
                {/*{*/}
                {/*    cities.map((city,index) =>*/}
                {/*        <WeatherPanel city={city} details={`details about ${city}`} isActive={index % 2 === 0}/>*/}
                {/*    )*/}
                {/*}*/}
                <Counter phone={phone} add={addToCart}/>
                <InputTypeChange addToCart={addToCart}/>
                <OpacityController/>


            </div>

        </div>
    )
}
