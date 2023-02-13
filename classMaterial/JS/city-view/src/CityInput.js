import {useEffect, useState} from "react";
import {AccessKey, DefaultCity, URL} from "./const"
import axios from "axios";
import './CityInput.scss'
export const CityInput = ({cbUpdateImg}) => {
    const [city, updateCity] = useState(DefaultCity)

    useEffect(()=>fetchCity(DefaultCity),[])
    const cbInput = (event) => {
        const newCity = event.target.value.trim().toLowerCase()
        return event.key === "Enter" && newCity!== city && (()=>{
            updateCity(newCity)
            fetchCity(newCity)
        })()
    }
    const fetchCity = (newCity) => {
        axios.get(URL,{
            params: {
                query: newCity,
            },
            headers:{
                Authorization: `Client-ID ${AccessKey}`}
        }).then((response) => {
            const {data:{results}} = response

            let imageList = results.map(item => ({
                description: item.alt_description,
                regular: item.urls.regular,
                thumb: item.urls.thumb
            }))

            cbUpdateImg(imageList)
            console.log('new images',imageList)

        })
            .catch((error) => console.log(error))

    }

    return <>
        <h2 className='cityName'>Current City: {city} </h2>
        <input
               type="text"
               className='inputCity'
               placeholder="Search City here..."
               onKeyDown={cbInput}

        />
    </>
}
