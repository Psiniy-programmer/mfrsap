export default function filterItems(state = '', action) {
    if (action.type === 'FIND_ITEM') {
        return action.payload
    }
    return state;
}