const FIND_ITEM = 'FIND_ITEM';

export default function filterItems(state = '', action) {
    if (action.type === FIND_ITEM) {
        return action.payload
    }
    return state;
}

export {FIND_ITEM};