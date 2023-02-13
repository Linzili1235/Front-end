import {useDispatch, useSelector} from "react-redux";
import {addCart, selectImage} from "../actions/cityViewAction";
export const CityCard = () => {
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imageLibrary)
    const cart = useSelector(state => state?.cityViewReducer?.cart)
    const dispatch = useDispatch()
    return <>
        <ol>
        {imageLibrary.map((url,index) => <li
            onClick={() => {
                dispatch(selectImage(index))
                dispatch(addCart(url))
            }}
            key={index}>{url}</li>)}
    </ol>
        <ol>
            {cart.map((url,index) => <li key={index}>{url}</li>)}
        </ol>



    </>
}