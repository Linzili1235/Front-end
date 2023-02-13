import './WeatherMainPage.scss'
import {WeatherPanel} from "./WeatherPanel";
export const WeatherMainPage = () => {
    const phone = () => {
        console.log('call me')
    }

    const cities = [
        'city1',
        'city2',
        'city3',
        'city4',
        'city5',
        'city6',
        'city7'
    ]

    return (
        <div>
            <h1>Weather Stack Main Page</h1>
            <p>search your city</p>
            <input type="text"/>
            <div className='regionalWeatherContainer'>
                <WeatherPanel city={'Beijing'} details={'details about Beijing'} isActive={true}/>
                <WeatherPanel city={'Toronto'} details={'details about Toronto'}/>
                <WeatherPanel city={'Ottawa'} details={'details about Ottawa'} phone={phone}/>
                {
                    cities.map((city,index) =>
                      <WeatherPanel city={city} details={`details about ${city}`} isActive={index % 2 === 0}/>
                    )
                }

            </div>

        </div>
    )
}