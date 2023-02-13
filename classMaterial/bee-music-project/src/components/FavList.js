import './List.scss'
import {useSelector} from "react-redux";
import {SongRow} from "./SongRow";
export const FavList = () => {
    let songs = useSelector(state => state?.songReducer?.rawSongList)
    let count = 0

    return <div className="songList">
        <div className="list">
            <div className="listRow title">Fav List</div>
            {songs.map((s,count) => {
                // to assign a special key for songRow in FavList
                // with index maybe the same in song list, another count should be applied
                // With the condition that you cannot add more than 50 songs in the FavList
                count===50 ? count = 0:count ++
                return s?.liked && <SongRow key={count} song={s}/>} )}

        </div>
    </div>
}