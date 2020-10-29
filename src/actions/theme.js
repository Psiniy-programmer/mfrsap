import {DARK_THEME, LIGHT_THEME, SYSTEM_THEME} from "../reducers/theme";
import {removeClasses} from "../helpers/helpers";

export function changeTheme(theme) {
    const root = document.getElementById('body');
    localStorage.setItem('theme', theme);
    switch (theme) {
        case LIGHT_THEME:
            removeClasses(root);
            root.classList.add(LIGHT_THEME);
            break;
        case DARK_THEME:
            removeClasses(root);
            root.classList.add(DARK_THEME);
            break;
        case SYSTEM_THEME:
            removeClasses(root);
            root.classList.add(SYSTEM_THEME);
            break;
        default:
            break
    }
    return (dispatch) => dispatch({type: theme})
}