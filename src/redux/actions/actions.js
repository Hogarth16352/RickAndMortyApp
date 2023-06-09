import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CHARACTERS, ORDER_CHARACTERS } from "./types";

export const addFavorites = ( character ) => {
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}

export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER_CHARACTERS,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER_CHARACTERS,
        payload: orden
    }
}

