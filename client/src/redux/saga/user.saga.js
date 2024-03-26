import { takeLatest, put } from 'redux-saga/effects';
import { ADD_SIGN_UP_START, GET_SIGN_IN_START } from "../constants/user.constant";
import { addUserByAPI, getUserByAPI } from '../services/user.service';
import { addSignUpFailure, addSignUpSuccess, getSignInFailure, getSignInSuccess } from '../actions/user.action';

function* getUser({ payload }) {
    try {
        let result = yield getUserByAPI(payload);
        yield put(getSignInSuccess(result));
    } catch (error) {
        yield put(getSignInFailure(error.message))
    }
}

function* addUser({ payload }) {
    try {
        let result = yield addUserByAPI(payload);
        yield put(addSignUpSuccess(result));
    } catch (error) {
        yield put(addSignUpFailure(error.message));
    }
}

export default function* user() {
    yield takeLatest(GET_SIGN_IN_START, getUser)
    yield takeLatest(ADD_SIGN_UP_START, addUser)
}