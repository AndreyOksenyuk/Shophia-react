import { combineReducers, createStore } from "redux";
import app from './app-reducer'
import auth from './auth-reducer'
import cart from './cart-reducer'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
   app,
   auth,
   cart,
   form: formReducer,
})

let store = createStore(reducers)
export default store;