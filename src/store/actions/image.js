import axios from "axios";
import {
    FETCH_IMAGE_ERROR,
    FETCH_IMAGE_SUCCESS,
    GET_RESULTS,
    FETCH_IMAGE_START,
    FETCH_LIKED_IMAGE,
    IMAGE_TO_REMOVE
} from "./actionType";


export function fetchImageBySearch(search) {
    return async (dispatch, getState) => {
        dispatch(fetchImageStart())
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + search +"&per_page=15&client_id=" + getState().image.clientId
        await axios.get(url)
            .then((response) => {
                dispatch(getResponse(response.data.results))
            })
    }
}

export function getResponse(results) {
    return {
        type: GET_RESULTS,
        results
    }
}

export function fetchCurrentImage(currentImage) {
    return {
        type: FETCH_IMAGE_SUCCESS,
        currentImage
    }
}

export function fetchError(error) {
    return {
        type: FETCH_IMAGE_ERROR,
        error
    }
}

export function fetchImageStart() {
    return {
        type: FETCH_IMAGE_START
    }
}

export function fetchImageById(id) {
    return async (dispatch, getState) => {
        dispatch(fetchImageStart())
        try {
            const url = "https://api.unsplash.com/photos/" + id + "?client_id=" + getState().image.clientId
            const response = await axios.get(url)
            const currentImage = response.data

            dispatch(fetchCurrentImage(currentImage))
            // console.log(currentImage)
        } catch (e) {
            fetchError(e)
        }
    }
}

export function setСhosenImage(infoImage) {
    return (dispatch) => {
        let temp = JSON.parse(localStorage.getItem('info-image'))
        temp.push(infoImage)
        localStorage.setItem('info-image', JSON.stringify(temp))
        dispatch(fetchChosenImage(temp))
    }
}

function fetchChosenImage(infoImage) {
    return {
        type: FETCH_LIKED_IMAGE,
        infoImage
    }
}

export function removeChosenImage(infoImage) {
    return (dispatch) => {
        let temp = JSON.parse(localStorage.getItem('info-image'))
        for(let i = 0; i < temp.length; i++) {
            if (temp[i].id === infoImage.id) {
                temp.splice(i, 1)
                break
            }
        }
        localStorage.setItem('info-image', JSON.stringify(temp))
        dispatch(removeImage(temp))
    }
}

function removeImage(imageToRemove) {
    return {
        type: IMAGE_TO_REMOVE,
        imageToRemove
    }
}
