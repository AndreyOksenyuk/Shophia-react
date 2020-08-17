import { combineReducers, createStore } from "redux";
import app from './app-reducer'


let reducers = combineReducers({
   app,
})

let store = createStore(reducers)
export default store;