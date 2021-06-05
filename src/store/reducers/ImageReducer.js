import {
    GET_RESULTS,
    FETCH_IMAGE_ERROR,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_START,
    FETCH_LIKED_IMAGE, IMAGE_TO_REMOVE
} from '../actions/actionType'


const initialState = {
    clientId: 'TRXQTCdBMg174xJd8535OohnFuIfiuRsfidHG4CYILI',
    results: [],
    currentImage: null,
    loading: false,
    chosen: []
}

export default function ImageReducer(state = initialState, action) {

    switch (action.type) {
        case GET_RESULTS:
            return {
                ...state, results: action.results
            }
        case FETCH_IMAGE_ERROR:
            return {
                ...state, error: action.error
            }
        case FETCH_IMAGE_SUCCESS:
            return {
                ...state, loading: false, currentImage: action.currentImage
            }
        case FETCH_IMAGE_START:
            return {
                ...state, loading: true
            }
        case FETCH_LIKED_IMAGE:
            return {
                ...state, chosen: action.infoImage
            }
        case IMAGE_TO_REMOVE:
            return {
                ...state, chosen: action.imageToRemove
            }
        default:
            return state
    }
}
