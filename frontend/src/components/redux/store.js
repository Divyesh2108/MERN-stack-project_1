import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { cartReducer } from "./reducers/cartReducers";
import {userRegisterLoginReducer} from './reducers/userReducers'

const rootReducer = combineReducers({
    cart: cartReducer,
    userRegisterLogin : userRegisterLoginReducer
})
const userInfoInLocalStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: sessionStorage.getItem('userInfo')
? JSON.parse(sessionStorage.getItem('userInfo'))
: {}

const INITIAL_STATE = {
    cart :{
        value: 0
    },
    userRegisterLogin : {
        userInfo : userInfoInLocalStorage
    }
}
 

const store = createStore(rootReducer,INITIAL_STATE, composeWithDevTools());




export default store;

