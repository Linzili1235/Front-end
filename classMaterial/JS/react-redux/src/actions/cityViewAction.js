// An action is a plain js object that has a type field
// like state
// action does not have to have payloads
// const myAction = {
//     type: 'fetchCity',
//     payload: 1
// }

// use action creators to create actions
import {
    ADD_CART,
    FETCH_CITY,
    SELECT_IMAGE,
    FETCH_CITY_REAL,
    QUERY_CITY,
    ACCESS_KEY,
    SELECT_CITY_INDEX
} from "../helper";

// thunk --middleware for redux to extends the store's abilities and let you write async logic
// that interact with the store
//
const imgLibrary = [
    'image-url1',
    'image-url2',
    'image-url3',
    'image-url4',
    'image-url5',
]
// export const fetchCity = () => {
//     console.log('from action creator fetchCity===>')
//     // async function
//     // fetch('https://unsplash.sdsedee')
//
//     //     .then()
//     //     .then()
//     return {
//         type: FETCH_CITY,
//         payload: imgLibrary // the load data
//     }
// }

export const selectImage = (index) => {
    return {
        type: SELECT_IMAGE,
        payload: index // the load data
    }
}

export const addCart = (url) => {
    return {
        type: ADD_CART,
        payload: url

    }
}

// async action creators eg: fetch
// you can always use this format to write your actions
export const fetchCityReal = () => dispatch => {
    // logic here, eg: fetch
    dispatch(
        {
            type: FETCH_CITY_REAL,
            payload: 'test'
        }
    )
    // you could dispatch again
    // dispatch()
}

export const queryCity = (city) => dispatch => {
    // logic here, eg: fetch
    dispatch(
        {
            type: QUERY_CITY,
            payload: city
        }
    )
    // you could dispatch again
    // dispatch()
}

export const fetchCity = (city) => dispatch => {
    dispatch({
        type: ISLOADING,
        payload: true

    })
    fetch(`https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${city}`)
        .then((response) => response.json())
        .then(({results}) => {
            let newRes = results.map(item => ({
            des: item.description,
                url: item.urls.regular,
                thumb: item.urls.thumb
        }))
            dispatch(
                {
                    type: FETCH_CITY,
                    payload: newRes
                })
            dispatch({
                type: ISLOADING,
                payload: false,
                payload2: 'someghitn'

            })
    }).catch(err => {console.log(err)
        dispatch({
            type: ISLOADING,
            payload: false

        })})

}

export const selectedCityIndex = (index) => dispatch => {
    // logic here, eg: fetch
    dispatch(
        {
            type: SELECT_CITY_INDEX,
            payload: index
        }
    )
    // you could dispatch again
    // dispatch()
}