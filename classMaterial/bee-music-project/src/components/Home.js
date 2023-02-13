import './Home.scss'
import axios from "axios";
import {API_URL} from "../Helper";
import {useEffect, useState} from "react";
import {AllList} from "./AllList";
import {FavList} from "./FavList";
import {PlayList} from "./PlayList";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions";


export const Home = () => {

    const [rawSongList, setRawSongList] = useState([])
    const dispatch = useDispatch()
    // useEffect(() => fetchData, []) // if no second parameter， rerender everytime
    // [] when mount
    // mount is when things load in your computer, render is every refresh, it's update

    // dispatch: useDispatch() only be used in FC
    // functional component, FC
    // class based component, CC

    // const fetchData = async () => {
    //     // async, sync
    //     let res = await axios.get(API_URL)
    //     setRawSongList(res.data)
        // axios.get(API_URL)
        //     .then(res => {
        //         console.log(res.data)
        //     setRawSongList(res.data)})
        //     .catch(err => console.log(err))

        // 2022 node support fetch now backend
        // fetch(API_URL).then(res => res.json()).then(({data}) => setRawSongList(data))

    // }
    return <section>
        <button onClick={()=>dispatch(actions.songAction.fetchAllSongs())}>Fetch Songs</button>
        <div className='container'>
            <div className="listContainer">

                <AllList/>
                <FavList/>
                <PlayList/>



            </div>
        </div>
    </section>
}