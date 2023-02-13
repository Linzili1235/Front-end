import './App.scss';
import {CityInput} from "./CityInput";
import {useEffect, useState} from "react";
import {ImageList} from "./ImageList";

function App() {
    const [img,updatedImg] = useState([])
    const [imgBG, updatedBG] = useState("")
    const updateImg = (newImg) => updatedImg(newImg)
    const updateBG = (newImg) => updatedBG(newImg)
    useEffect(()=>{
        img.length > 0 && updatedBG(img[0])
    },[img])
    useEffect(()=>{
        document.title = imgBG && imgBG?.description && imgBG.description ? imgBG.description.charAt(0).toUpperCase() + imgBG.description.slice(1): "Loading..."
    },[imgBG])

  return (
    <div className="App"
    style = {
        {
            background: imgBG && imgBG.regular && `url(${imgBG.regular}) no-repeat center center/cover fixed`
        }
    }>
        <div className='searchBar'>
      <CityInput cbUpdateImg = {updateImg} />
        </div>
        <ImageList images = {img} getBG = {updateBG}/>
    </div>
  );
}

export default App;
