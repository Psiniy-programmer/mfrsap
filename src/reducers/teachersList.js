export default function teachersList(state = [], action) {
    switch (action.type) {
        case 'TEACHERS_DATA_FETCH_OK' :
            return action.teachersList
        default :
            return state
    }
}