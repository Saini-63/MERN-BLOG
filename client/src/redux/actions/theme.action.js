import { ADD_THEME_START, ADD_THEME_SUCCESS } from "../constants/theme.constants"

export const addThemeStart = () => {
    return {
        type: ADD_THEME_START,
    }
}

export const addThemeSuccess = () => {
    return {
        type: ADD_THEME_SUCCESS,
    }
}