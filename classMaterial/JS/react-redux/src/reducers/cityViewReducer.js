// A reducer is a function that accepts the current state and
// an action object, decides how to update the state

/* reducer rules:

immutability:
reducer can only calculate the new state based on the previous state & payload
you should make immutable updates
you should not use async method to update the states

*/

// initial state
import {ADD_CART, FETCH_CITY, QUERY_CITY, SELECT_CITY_INDEX, SELECT_IMAGE} from "../helper";

// const initState = {
//     imageLibrary: [],
//     selectedImageIndex: 0,
//     cart: []
// }

const initState = {
    city: "toronto",
    selectedIndex: 0,
    urlList: []
}

export const cityViewReducer = (state = initState, action) => {
    switch (action.type){
        // case FETCH_CITY:
        //     console.log('from cityViewReducer')
        //     return {...state,
        //     imageLibrary: action?.payload} //new stated

        case SELECT_IMAGE:
            return {...state,
            selectedImageIndex: action?.payload}
        case ADD_CART:
            let temp = [...state.cart]
            temp.push(action?.payload)
            return {
                ...state,
                cart:[...temp]
            }
        case QUERY_CITY:
            return {...state,city: action?.payload}
        case FETCH_CITY:
            return {...state,
            urlList: action?.payload}
        case SELECT_CITY_INDEX:
            return {...state,
                selectedIndex: action?.payload}
        default:
            return state

    }

}