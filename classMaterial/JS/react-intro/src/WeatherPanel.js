import './WeatherPanel.scss'
export const WeatherPanel = (props) => {
     return (
        <div
            style={{backgroundColor: props.isActive?'blue':''}}
            className='WeatherPanel'>
            <h2>{props.city}</h2>
            <p>{props.details}</p>
            <button
            onClick={props.phone}>click to see 7 days weather</button>
        </div>
    )
}