import {
    SEMESTER_START_FETCH_ERROR,
    SEMESTER_START_FETCH_LOADING,
    SEMESTER_START_FETCH_OK
} from "../reducers/semesterStart";
import api from "../helpers/api";

function fetchSemesterStartSuccess(semesterStart) {
    return {
        type: SEMESTER_START_FETCH_OK,
        semesterStart
    }
}

function fetchSemesterStartLoading() {
    return {
        type: SEMESTER_START_FETCH_LOADING
    }
}

function fetchSemesterStartError(error) {
    return {
        type: SEMESTER_START_FETCH_ERROR,
        error
    }
}

export function fetchSemesterStart() {
    return (dispatch) => {
        dispatch(fetchSemesterStartLoading())
        fetch(api.semesterStart)
            .then(response => response.json())
            .catch(error => dispatch(fetchSemesterStartError(error)))
            .then(semesterStart => dispatch(fetchSemesterStartSuccess(semesterStart)))
    }
}