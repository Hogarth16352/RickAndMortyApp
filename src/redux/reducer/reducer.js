import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CHARACTERS, ORDER_CHARACTERS } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [ action.payload, ...state.allCharacters ],
                allCharacters: [ action.payload, ...state.allCharacters ]
            }

        case DELETE_FAVORITES:
            const deleteFavorites = state.myFavorites.filter(
                (fav) => fav.id !== action.payload
            );
            return {
                ...state,
                myFavorites: deleteFavorites,
                allCharacters: deleteFavorites
            };        
        
        case FILTER_CHARACTERS:
            const filterCharacters = [ ...state.myFavorites ];
            const filteredFavorites = filterCharacters.filter(
                (char) => char.gender === action.payload
            );
            return {
                ...state,
                myFavorites: filteredFavorites
            };

        case ORDER_CHARACTERS:
            const { allCharacters: characters } = state;
            const sortedCharacters = characters.slice().sort((a, b) => {
                if (action.payload === 'Ascendente') {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }
            });
            return {
                ...state,
                myFavorites: sortedCharacters,
            };

        default:
            return { ...state };
    }
}

export default rootReducer;