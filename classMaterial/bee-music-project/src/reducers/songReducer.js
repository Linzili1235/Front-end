import {actionType} from "../Helper";

// redux / store shape
const initState = {
    rawSongList: [],
}
export const songReducer = (state = initState,action) => {
    switch (action.type) {
        case actionType.SELECT_SONG:
            let id2 = action?.payload
            let newSongList2 = [...state.rawSongList]
            newSongList2.map(item => {return item.id===id2 ? item.checked = !item.checked: item})
            return {
                ...state,
                rawSongList: newSongList2

            }
        case actionType.LIKED_SONG:
            let id = action?.payload
            let newSongList = [...state.rawSongList]
            newSongList.map(item => {return item.id===id ? item.liked = !item.liked: item})
            return {
                ...state,
                rawSongList: newSongList

            }
        case actionType.FETCH_ALL_SONGS:
            return {...state,
                rawSongList: action?.payload}
        default:
            return state
    }
}