import {FACULTY_DATA_FETCH_ERROR, FACULTY_DATA_FETCH_LOADING, FACULTY_DATA_FETCH_OK,} from "../reducers/facultyList";

function fetchFacultyDataSuccess(facultyList) {
    return {
        type: FACULTY_DATA_FETCH_OK,
        facultyList
    }
}

function fetchFacultyDataLoading() {
    return {
        type: FACULTY_DATA_FETCH_LOADING
    }
}

function fetchFacultyDataError(error) {
    return {
        type: FACULTY_DATA_FETCH_ERROR,
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