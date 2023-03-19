import * as actionTypes from '../constants/cartConstants';

export const addToCart = () => {
    return{
        type: actionTypes.ADD_TO_CART,
        someValue: 0
    }
}
