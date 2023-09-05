import {combineReducers, createStore} from 'redux'

const initialState = null


function searchTermReducer(state = initialState,action){
    if(action.type === "SEARCH_ROBOTS"){
        return action.playload ;
    }
    return state
}


function loadingReducer(state = true, action){
    if(action.type === "SEARCH_ROBOTS")return true
    if(action.type=== "END_LOADING") return false

 
    return state
}


const rootReducer = combineReducers({
    searchTerm : searchTermReducer,
    loading : loadingReducer
})
export const store = createStore(rootReducer)


