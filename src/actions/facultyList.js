function fetchFacultyDataSuccess(facultyList) {
    return {
        type: 'FACULTY_DATA_FETCH_OK',
        facultyList
    }
}

export function fetchFacultyData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response
            })
            .then(response => response.json())
            .then(facultyList => dispatch(fetchFacultyDataSuccess(facultyList)))
    }
}