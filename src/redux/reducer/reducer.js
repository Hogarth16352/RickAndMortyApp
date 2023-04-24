import { ADD_FAVORITES, DELETE_FAVORITES } from "../actions/types";


const initialState = {
    myFavorites: []
}

export default function reducer( state = initialState , {type,payload} ){
    switch ( type ) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [ ...state.myFavorites, payload ]
            }

        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    fav => fav.id !== payload
                )
            }        
        
        default:
            return state;
    }
}