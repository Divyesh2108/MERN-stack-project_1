import * as actionTypes from '../constants/cartConstants'

const intState = {
    value : 0
}

export const cartReducer = (state=intState,action) =>{
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
        return{value: state.value + 1 + action.someValue}

        default:
           return intState
    }
}