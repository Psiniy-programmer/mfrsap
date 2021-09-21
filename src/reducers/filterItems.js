const FIND_ITEM = "FIND_ITEM";
const CLEAR_INPUT = "CLEAR_INPUT";
const initialState = "";

export default function filterItems(state = initialState, action) {
    switch (action.type) {
        case FIND_ITEM:
            return action.payload;
        case CLEAR_INPUT:
            return initialState;
        default:
            break;
    }
    if (action.type === FIND_ITEM) {
        return action.payload;
    }
    return state;
}

export {FIND_ITEM, CLEAR_INPUT};
