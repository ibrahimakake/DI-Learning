import {combineReducers, createStore} from "redux"


function counterReducer(state = 0,action){
  if(action.type === "INCREMENT") return state + 1
  if(action.type === "DECREMENT") return state - 1
  if(action.type === "INCREMENT_IF_ODD") {
    if(state % 2 !==0)return state + 1
    return state
  }

   

    return state;
}


const rootReducer = combineReducers({
    counterReducer : counterReducer
})




export const store = createStore(rootReducer)

store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
