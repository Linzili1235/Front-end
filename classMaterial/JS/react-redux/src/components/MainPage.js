import {Library} from "./Library";
import './MainPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchCity, queryCity} from "../actions";
import {useEffect} from "react";
export const MainPage = () => {
    const dispatch = useDispatch()
    const city = useSelector(state => state?.cityViewReducer?.city)
    const urlList = useSelector(state => state?.cityViewReducer?.urlList)
    const selectedIndex = useSelector(state => state?.cityViewReducer?.selectedIndex)

    useEffect(() => dispatch(fetchCity(city)),[city])

    return <div className="MainPage">
        <input type="text" onKeyDown={(e) => {
            e.key === "Enter" && dispatch(queryCity(e.target.value.trim().toLowerCase()))
        }}/>
        <p>query:{city}</p>
        {urlList.length && <p>{urlList[selectedIndex].des} </p>}
        {urlList.length && <img src={urlList[selectedIndex].url}/>}

        <Library/>
    </div>
}