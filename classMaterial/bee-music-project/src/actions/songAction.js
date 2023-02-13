import {actionType} from "../Helper";

const songs = [
    {id: 1, name: 'One kiss', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 2, name: 'One kiss2', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 3, name: 'One kiss3', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 4, name: 'One kiss4', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 5, name: 'One kiss5', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 6, name: 'One kiss6', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 7, name: 'One kiss7', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 8, name: 'One kiss8', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 9, name: 'One kiss9', artist: 'Taylor', cover:'./img/Lust_for_Life.jpg'},
    {id: 10, name: 'One kiss10', artist: 'Taylor',cover:'./img/Lust_for_Life.jpg'},

]

// action creator
const fetchAllSongs = () => {
    return {
        type: actionType.FETCH_ALL_SONGS ,
        payload: songs.map((item) => ( // map, filter, some, find, findIndex,sort, push, slice, foreach
            item && {...item,
                liked:false,
                checked:false,
                playing:false}
        ))
    }
}

const selectSong = (id) => {
    return {
        type: actionType.SELECT_SONG ,
        payload:id
    }
}

const likedSong = (id) => {
    return {
        type: actionType.LIKED_SONG,
        payload:id
    }
}

export default {fetchAllSongs,selectSong,likedSong}