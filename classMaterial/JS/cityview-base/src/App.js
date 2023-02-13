import './App.scss';
import {CityInput} from "./CityInput"
import {ImageList} from "./ImageList";
import {useEffect, useState} from "react";
function App() {
    const [images, setImages] = useState([])
    const [imgBG, setImgBG] = useState('')

    useEffect(()=>{
        document.title = imgBG && imgBG?.des && imgBG.des? imgBG.des.charAt(0).toUpperCase() + imgBG.des.slice(1): 'Loading...'
    },[imgBG])

    useEffect(()=>{
        images.length > 0 && setImgBG(images[0])},[images])
    const updateMainBG = img => {
        console.log('new background image set by ImageList component', img)
        setImgBG(img)
    }
    const updateImages = (newImages) => setImages(newImages)


  return <div className="App" style={
      {
          background: imgBG && imgBG.regular && `url(${imgBG.regular}) no-repeat center center/cover fixed `
      }
  }>
      <div className='searchBar'>
          <CityInput cbUpdateImages={updateImages}/>

      </div>
      <ImageList images={images} updateMainBG={updateMainBG}/>
         </div>

}

export default App;
