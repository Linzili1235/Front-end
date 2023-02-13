import {useDispatch, useSelector} from "react-redux";
import {fetchCity} from "../actions";
import {CityCard} from "./CityCard";

export const Main = () => {
    const dispatch = useDispatch()
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imageLibrary)
    const selectedIndex = useSelector(state => state?.cityViewReducer?.selectedImageIndex)

    return <>
        <h1>this is Main Page</h1>
        <h2>You have selected image index: {selectedIndex}</h2>
        <button
        onClick={()=>{
            dispatch(fetchCity())
        }}
        >click to fetch</button>
        <hr/>
        <p>{JSON.stringify(imageLibrary)}</p>
        <CityCard/>

    </>
}