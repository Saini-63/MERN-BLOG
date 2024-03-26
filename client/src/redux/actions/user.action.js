
import { ADD_SIGN_UP_FAILURE, ADD_SIGN_UP_START, ADD_SIGN_UP_SUCCESS, GET_SIGN_IN_FAILURE, GET_SIGN_IN_START, GET_SIGN_IN_SUCCESS } from './../constants/user.constant';

export const getSignInStart = (data) => ({
    type: GET_SIGN_IN_START,
    payload: data,
})

export const getSignInSuccess = (data) => ({
    type: GET_SIGN_IN_SUCCESS,
    payload: data,
})

export const getSignInFailure = (error) => ({
    type: GET_SIGN_IN_FAILURE,
    payload: error,
})

//<====== Sign Up ======>

export const addSignUpStart = (data) => ({
    type: ADD_SIGN_UP_START,
    payload: data,
})

export const addSignUpSuccess = (data) => ({
    type: ADD_SIGN_UP_SUCCESS,
    payload: data,
})

export const addSignUpFailure = (error) => ({
    type: ADD_SIGN_UP_FAILURE,
    payload: error,
})