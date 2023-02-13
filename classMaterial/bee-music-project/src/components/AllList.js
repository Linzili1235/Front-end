
import './List.scss'
import {useDispatch, useSelector} from "react-redux";
import {SongRow} from "./SongRow";
import actions from "../actions";
export const AllList = () => {
    let songs = useSelector(state => state?.songReducer?.rawSongList)
    const dispatch = useDispatch()
    return <div className="songList">
        <div className="list">
            <div className="listRow title">All List</div>
            <div className="listRow">
                {songs.map((s,index) => <SongRow key={index}
                                                  song={s} onClick={()=>{dispatch(actions.songAction?.selectSong(s.id))}}
                />)}
            </div>

        </div>
    </div>
}