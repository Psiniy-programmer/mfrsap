export default function scrolls(state = {}, action) {
    switch (action.type) {
        case 'ADD_SCROLL_POS' :
            const obj = {};
            obj[action.name] = action.payload;
            return Object.assign(state, obj)
        default:
            return state
    }
}