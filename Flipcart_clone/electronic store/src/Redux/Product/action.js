import {GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE,ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART} from './actionTypes';
import axios from 'axios'

export const getProductRequest = () => ({
    type: GET_PRODUCT_REQUEST
})

export const getProductSuccess = (payload) => ({
    type: GET_PRODUCT_SUCCESS,
    payload
})

export const getProductFailure = () => ({
    type: GET_PRODUCT_FAILURE
})


export const getProduct = () => dispatch => {
    dispatch(getProductRequest())
    axios.get("http://localhost:3000/products")
    .then(res => dispatch(getProductSuccess(res.data)))
    .catch(() => dispatch(getProductFailure()))
}

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const removeFromCart=(payload)=>({
    type: REMOVE_FROM_CART,
    payload
})

export const emptyCart=()=>({
    type:EMPTY_CART
})