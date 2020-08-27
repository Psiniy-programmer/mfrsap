export default function auditoryList(state = [], action) {
    switch (action.type) {
        case 'AUDITORY_DATA_FETCH_OK' :
            return action.auditoryList
        default :
            return state
    }
}