import {ADD_SEARCHED_TITLE, REMOVE_SEARCHED_TITLE} from "./actionType";

export function addSearchTitle(title) {
    return dispatch => {
        let temp = JSON.parse(localStorage.getItem('searchTitle'))
        temp.push(title)
        localStorage.setItem('searchTitle', JSON.stringify(temp))
        dispatch(addSearchItem(title))
    }
}

function addSearchItem(titles) {
    return {
        type: ADD_SEARCHED_TITLE,
        titles
    }
}

export function removeSearchTitle(title) {
    return (dispatch) => {
        let temp = JSON.parse(localStorage.getItem('searchTitle'))
        for(let i = 0; i < temp.length; i++) {
            if (temp[i] === title) {
                temp.splice(i, 1)
                break
            }
        }
        localStorage.setItem('searchTitle', JSON.stringify(temp))
        dispatch(removeSearchedTitle(temp))
    }
}

function removeSearchedTitle(titles) {
    return {
        type: REMOVE_SEARCHED_TITLE,
        titles
    }
}

