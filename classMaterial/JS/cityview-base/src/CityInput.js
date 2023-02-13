import {useEffect, useState} from "react";
import './CityInput.scss'
import {AccessKey, BasicURL, DefaultCity} from "./consts";
import axios from "axios";
export const CityInput = ({cbUpdateImages}) => {
    const [city, updatedCity] = useState(DefaultCity)
    const [images, setImages] = useState([])
    // event handler for key down
    const cbInput = (event) => {

        let newCity = event.target.value.trim().toLowerCase()
        event.key === 'Enter' &&
            newCity !== city && // only when the old city != new city will we search again
        (() => {
            updatedCity(newCity) // asynchronized, so the fetchCity will get the older city
            console.log('the new city', city)
            fetchCity(newCity)

        })()
    }

    useEffect(()=>{fetchCity(DefaultCity)},[])

    const fetchCity = (newCity) => {
        // axios third party library
        axios.get(BasicURL, {
            params: {
                query: newCity,
                orientation: 'landscape',
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(res => {
            const {data:{results}} = res
            console.log('raw data',results)
            // reorganize the data structure, make one array like this:

            let imageList = results.map(item => ({
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb
                }
            ))
            console.log(imageList)
            cbUpdateImages(imageList)
            setImages(imageList)


        }).catch(err => console.log('fetch city http error!',err))
    }
    return <>
        <h2 className='cityName'>New City: {city}</h2>
        <input type="text"
               className='inputCity'
        placeholder='Search City here...'
        onKeyDown={cbInput}/>
    </>
}