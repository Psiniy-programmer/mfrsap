console.log(localStorage)
localStorage.setItem('theme', 'dark');
let currentTheme = localStorage.getItem('theme');
let initialState = currentTheme !== undefined ? currentTheme : 'light';

export default function darkTheme(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE' :
            return !state;
        default :
            return state;
    }
}