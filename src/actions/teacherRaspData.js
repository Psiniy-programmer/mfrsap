function fetchRaspDataSuccess(teacherRaspData) {
    return {
        type: 'TEACHER_RASP_DATA_FETCH_OK',
        teacherRaspData
    }
}

export function fetchTeacherRaspData(url) {
    return (dispatch) => {
        fetch( url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response
            })
            .then(response => response.json())
            .then(teacherRaspData => dispatch(fetchRaspDataSuccess(teacherRaspData)))
    }
}