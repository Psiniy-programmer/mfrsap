export default function facultyList(state = [], action) {
    switch (action.type) {
        case 'FACULTY_DATA_FETCH_OK' :
            return action.facultyList
        default :
            return state
    }
}