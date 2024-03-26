import { ADD_SIGN_UP_FAILURE, ADD_SIGN_UP_START, ADD_SIGN_UP_SUCCESS, GET_SIGN_IN_FAILURE, GET_SIGN_IN_START, GET_SIGN_IN_SUCCESS } from './../constants/user.constant';
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    data: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SIGN_IN_START:
        case ADD_SIGN_UP_START:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case GET_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                loading: false,
            };
        case ADD_SIGN_UP_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
                currentUser: null,
            }
        case GET_SIGN_IN_FAILURE:
        case ADD_SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}