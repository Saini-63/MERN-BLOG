import { takeLatest, put } from 'redux-saga/effects';
import { ADD_SIGN_UP_START, GET_SIGN_IN_START } from "../constants/user.constant";
import { addUserByAPI, getUserByAPI } from '../services/user.service';
import { addSignUpFailure, addSignUpSuccess, getSignInFailure, getSignInSuccess } from '../actions/user.action';
import { ADD_THEME_START } from '../constants/theme.constants';
import { addThemeSuccess } from '../actions/theme.action';

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

function* addTheme() {
    try {
        yield put(addThemeSuccess());
    } catch (error) {
        console.log(error);
    }
}

export default function* user() {
    yield takeLatest(GET_SIGN_IN_START, getUser)
    yield takeLatest(ADD_SIGN_UP_START, addUser)
    yield takeLatest(ADD_THEME_START, addTheme);
}