const LIGHT_THEME = 'LIGHT_THEME';
const DARK_THEME = 'DARK_THEME';
const SYSTEM_THEME = 'SYSTEM_THEME';

let themeFromStorage = localStorage.getItem('theme');
const initialState = themeFromStorage === null ? SYSTEM_THEME : themeFromStorage;

export default function theme(state = initialState, action) {
    switch (action.type) {
        case LIGHT_THEME :
            return LIGHT_THEME;
        case DARK_THEME :
            return DARK_THEME;
        case SYSTEM_THEME :
            return SYSTEM_THEME;
        default :
            return state
    }
}

export  {LIGHT_THEME, DARK_THEME, SYSTEM_THEME};
