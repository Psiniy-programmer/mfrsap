import {
    AUDITORY_DATA_FETCH_ERROR,
    AUDITORY_DATA_FETCH_LOADING,
    AUDITORY_DATA_FETCH_OK,
} from "../reducers/auditoryList";
import api from "../helpers/api";

function fetchAuditoryDataSuccess(auditoryList) {
    return {
        type: AUDITORY_DATA_FETCH_OK,
        auditoryList,
    };
}

function fetchAuditoryDataLoading() {
    return {
        type: AUDITORY_DATA_FETCH_LOADING,
    };
}

function fetchAuditoryDataError(error) {
    return {
        type: AUDITORY_DATA_FETCH_ERROR,
        error,
    };
}

export function fetchAuditoryData() {
    return (dispatch) => {
        dispatch(fetchAuditoryDataLoading());
        fetch(api.lists.aud)
            .then((response) => response.json())
            .catch((error) => fetchAuditoryDataError(error))
            .then((auditoryList) => dispatch(fetchAuditoryDataSuccess(auditoryList)));
    };
}
