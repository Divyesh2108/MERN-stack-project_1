import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LOGIN_USER } from '../constants/userConstants'
import { LOGOUT_USER } from '../constants/userConstants'
const dispatch = useDispatch;


export const setReduxUserState = (userCreated) =>{
    return({
        type: LOGIN_USER,
        payload: userCreated
    })
}

export const logout = () =>{

   document.location.href = '/login';
   axios.get('/api/logout');
   localStorage.removeItem('userInfo');
   localStorage.removeItem('cart');
   sessionStorage.removeItem('userInfo');
   dispatch({type:LOGOUT_USER})
}
