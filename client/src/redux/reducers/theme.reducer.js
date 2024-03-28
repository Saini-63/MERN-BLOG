import { ADD_THEME_SUCCESS } from "../constants/theme.constants";

const initialState = {
    theme: 'light',
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_THEME_SUCCESS:
            return {
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        default:
            return state;
    }
}