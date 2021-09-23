import {TEACHERS_DATA_FETCH_ERROR, TEACHERS_DATA_FETCH_LOADING, TEACHERS_DATA_FETCH_OK} from '../reducers/teachersList';
import api from "../helpers/api";

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
        type: TEACHERS_DATA_FETCH_ERROR,
        error
    }
}

export function fetchTeachersData() {
    return (dispatch) => {
        dispatch(fetchTeachersDataLoading())
        fetch(api.lists.teacher)
            .then(response => response.json())
            .catch(error => dispatch(fetchTeachersDataError(error)))
            .then(teachersList => dispatch(fetchTeachersDataSuccess(teachersList)))
    }
}