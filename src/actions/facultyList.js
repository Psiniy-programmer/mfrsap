function fetchFacultyDataSuccess(facultyList) {
    return {
        type: 'FACULTY_DATA_FETCH_OK',
        facultyList
    }
}

function fetchFacultyDataLoading() {
    return {
        type : 'FACULTY_DATA_FETCH_LOADING'
    }
}

function fetchFacultyDataError(error) {
    return {
        type : 'RASP_DATA_FETCH_ERROR',
        error
    }
}

export function fetchFacultyData(url) {
    return (dispatch) => {
        dispatch(fetchFacultyDataLoading())
        fetch(url)
            .then(response => response.json())
            .catch(error => dispatch(fetchFacultyDataError(error)))
            .then(facultyList => dispatch(fetchFacultyDataSuccess(facultyList)))
    }
}