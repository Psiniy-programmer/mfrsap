export default function groupsList(state = [], action) {
    switch (action.type) {
        case 'GROUPS_DATA_FETCH_OK' :
            return action.groupsList
        default :
            return state
    }
}