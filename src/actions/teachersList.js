import {
    TEACHERS_DATA_FETCH_ERROR,
    TEACHERS_DATA_FETCH_LOADING,
    TEACHERS_DATA_FETCH_OK
} from '../reducers/teachersList';

function fetchTeachersDataSuccess(teachersList) {
    return {
        type: TEACHERS_DATA_FETCH_OK,
        teachersList
    }
}

function fetchTeachersDataLoading() {
    return {
        type: TEACHERS_DATA_FETCH_LOADING
    }
}

function fetchTeachersDataError(error) {
    return {
        type : TEACHERS_DATA_FETCH_ERROR,
        error
    }
}

export function fetchTeachersData(url) {
    return (dispatch) => {
        dispatch(fetchTeachersDataLoading())
        fetch(url)
            .then(response => response.json())
            .catch(error => dispatch(fetchTeachersDataError(error)))
            .then(teachersList => dispatch(fetchTeachersDataSuccess(teachersList)))
    }
}