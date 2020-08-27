function fetchTeachersDataSuccess(teachersList) {
    return {
        type: 'TEACHERS_DATA_FETCH_OK',
        teachersList
    }
}

export function fetchTeachersData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response
            })
            .then(response => response.json())
            .then(teachersList => dispatch(fetchTeachersDataSuccess(teachersList)))
    }
}