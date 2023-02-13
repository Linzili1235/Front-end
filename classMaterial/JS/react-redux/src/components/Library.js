import {useDispatch, useSelector} from "react-redux";
import './Library.scss'
import {selectedCityIndex} from "../actions";
export const Library = () => {
    const dispatch = useDispatch()
    const urlList = useSelector(state => state?.cityViewReducer?.urlList)
    return <div className="libraryContainer">
        <h2>Library</h2>
        {urlList.map((item,index) => <img key={index} src={item.thumb}
                                          onClick={()=>dispatch(selectedCityIndex(index))} alt=""/>)}
    </div>

}