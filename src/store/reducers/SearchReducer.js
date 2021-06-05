import {ADD_SEARCHED_TITLE, REMOVE_SEARCHED_TITLE} from "../actions/actionType";

const initialState = {
    searched: []
}

export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SEARCHED_TITLE:
            return {
                ...state, searched: action.titles
            }
        case REMOVE_SEARCHED_TITLE:
            return {
                ...state, searched: action.titles
            }
        default:
            return state
    }
}
