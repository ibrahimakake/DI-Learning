import {combineReducers, createStore} from 'redux'

const initialState = null


function searchTermReducer(state = initialState,action){
    if(action.type === "SEARCH_ROBOTS"){
        return action.playload ;
    }
    return state
}

const rootReducer = combineReducers({
    searchTerm : searchTermReducer
})
export const store = createStore(rootReducer)


