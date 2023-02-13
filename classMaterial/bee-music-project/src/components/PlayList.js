import './List.scss'
import {useSelector} from "react-redux";
import {SongRow} from "./SongRow";
export const PlayList = () => {
    let songs = useSelector(state => state?.songReducer?.rawSongList)
    let count = 0
    return <div className="songList">
        <div className="list">
            <div className="listRow title">Play List</div>
            {songs.filter(s => s.checked).map(item => {
                count === 50 ? count = 0 : count++
                return <SongRow key={count} song={item}/>
            })}

        </div>
    </div>
}