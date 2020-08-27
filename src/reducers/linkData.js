export default function linkData(state = {}, action) {
    switch (action.type) {
        case 'ADD_LINK' :
            const obj = {};
            obj[action.name] = action.payload;
            return Object.assign(state, obj);
        default :
            return state
    }
}