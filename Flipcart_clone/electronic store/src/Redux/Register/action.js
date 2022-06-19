import {REGREQUEST, REGSUCCESS, REGFAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, IS_AUTH, USER_DATA, LOGIN_USER} from './actionTypes'
import axios from 'axios'

export const regRequest = () => ({
    type: REGREQUEST
})

export const regSuccess = (payload) => ({
    type: REGSUCCESS,
    payload
})

export const regFailure = () => ({
    type: REGFAILURE
})


export const registerData = (payload) => dispatch => {
    console.log(payload)
    dispatch(regRequest())
    axios({
        method:"post",
        url:"http://localhost:3000/auth",
        data: {
            email: payload.email,
            password: payload.password
        }
    })
    .then(res => {
        dispatch(getUserData())
        dispatch(regSuccess(res.data))})
    .then(err => dispatch(regFailure(err)))

}

export const getUserRequest = () => ({
    type: GET_USER_REQUEST
})

export const getUserSuccess = (payload) => ({
    type: GET_USER_SUCCESS,
    payload
})

export const getUserFailure = () => ({
    type: GET_USER_FAILURE
})

//axios getting data
export const getUserData = () => dispatch => {
    dispatch(getUserRequest())
    axios({
        method:"GET",
        url:"http://localhost:3000/auth"
    })
    .then(res => dispatch(getUserSuccess(res.data)))
    .then(err => dispatch(getUserFailure(err)))

}

export const isAuth = (payload) => ({
    type:IS_AUTH,
    payload
})

export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload
})