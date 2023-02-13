import './SongRow.scss'
import AddIcon from '@mui/icons-material/Add';
import {CheckedIcon, FavIcon, PlayingIcon} from "./FavIcon";
import {useDispatch} from "react-redux";
import actions from "../actions";
export const SongRow = ({song}) => {
    const dispatch = useDispatch()
    return (
        <div className='songRow'>
            <div className="songRow_Index">
                {song?.id}
                <CheckedIcon checked={song?.checked} onClick={() => dispatch(actions?.songAction?.selectSong(song?.id))}/>
            </div>
            <div className="songRow_Image">
                <img src= {song?.cover} alt="" width='50' height='50'/>
            </div>
            <div className="songRow_Content">
                <div className="songRow_Content_Title">
                    <div className="songRow_Title_Name">{song?.name}</div>
                    <div className="songRow_Title_Lyrics">{song?.artist}</div>
                </div>
                {/*// ?? nullish coalescing operator*/}
                <div className='songRow_Content_Album'>{song?.album ?? 'Album'}</div>
            </div>

            <div className="songRow_Length">{song?.length}</div>
            <div className="songRow_Button">
                {/*// todo*/}
                <FavIcon liked={song?.liked} onClick={() => dispatch(actions?.songAction?.likedSong(song?.id))}/>
                <PlayingIcon playing={song?.playing}/>
            </div>
        </div>
    )
}