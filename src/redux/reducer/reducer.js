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
                myFavorites: [ action.payload, ...state.allCharacters  ],
                allCharacters: [ action.payload, ...state.allCharacters ]
            }

        case DELETE_FAVORITES:
            const deleteFavorites = state.allCharacters.filter(
                (fav) => fav.id !== action.payload
            );
            return {
                ...state,
                myFavorites: deleteFavorites,
                allCharacters: deleteFavorites
            };        
        
        case FILTER_CHARACTERS:
            const filteredCharacters = state.allCharacters.filter(
                (char) => char.gender === action.payload
            );
            return {
                ...state,
                myFavorites: [...filteredCharacters]
            };
            // case FILTER_CARDS:
            //     let genderFilter = [...state.allCharacters];
            //     if (action.payload !== 'all') genderFilter = genderFilter.filter(ch => ch.gender ===
            //         action.payload);
            //     return {
            //         ...state,
            //         myFavorites: genderFilter,
            //     }

        case ORDER_CHARACTERS:
            const sortedCharacters = state.allCharacters.slice().sort((a, b) => {
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