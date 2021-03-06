import {GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART} from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
    product: [],
    cart:[],
    len:""

}

export const productReducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: payload
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        case ADD_TO_CART:
            const productToAdd = state.product.find((item) => item.id === payload)
            const qty = {...productToAdd, qty: 1}
            const searchCart = state.cart.findIndex((item) => item.id === payload)
            if(searchCart === -1){
                return {
                    ...state,
                    cart: [...state.cart, qty]
                }
            }
            else{
                return {
                    ...state,
                    cart: state.cart.map((item, index) => index === searchCart?{...item, qty: item.qty+1}: item)
                }
            }
            case REMOVE_FROM_CART:
                const searchCartToRemove = state.cart.findIndex((item) => item.id === payload)
                if(state.cart[searchCartToRemove].qty === 1){
                    alert("You can not go under 1.")
                }
                else{
                    return {
                        ...state,
                        cart: state.cart.map((item, index) => index === searchCartToRemove?{...item, qty: item.qty-1}: item)
                    }
                }
            case EMPTY_CART:
                return {...initState}

                

            
        default:
            return state
    }
}