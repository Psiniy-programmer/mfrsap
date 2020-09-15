export default function raspData(state = {}, action) {
    switch (action.type) {
        case 'GROUP_RASP_DATA_FETCH_OK' :
            return {
                data: action.groupRaspData,
                isFetched: true
            }
        case 'TEACHER_RASP_DATA_FETCH_OK' :
            return action.teacherRaspData
        case 'AUDITORY_RASP_DATA_FETCH_OK' :
            return action.auditoryRaspData
        default :
            return state
    }
}