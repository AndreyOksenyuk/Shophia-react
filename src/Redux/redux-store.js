import { combineReducers, createStore } from "redux";
import app from './app-reducer'
import auth from './auth-reducer'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
   app,
   auth,
   form: formReducer,
})

let store = createStore(reducers)
export default store;