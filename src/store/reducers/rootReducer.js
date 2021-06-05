import { combineReducers} from "redux";
import ImageReducer from './ImageReducer'
import SearchReducer from  './SearchReducer'

export default combineReducers( {
    image: ImageReducer,
    search: SearchReducer
})
