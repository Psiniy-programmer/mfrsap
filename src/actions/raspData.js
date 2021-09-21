import {RASP_DATA_FETCH_ERROR, RASP_DATA_FETCH_LOADING, RASP_DATA_FETCH_OK} from '../reducers/raspData';

function fetchRaspDataSuccess(raspData) {
    return {
        type: RASP_DATA_FETCH_OK,
        raspData
    }
}

function fetchRaspDataLoading() {
    return {
        type: RASP_DATA_FETCH_LOADING
    }
}

function fetchRaspDataError(error) {
    return {
        type: RASP_DATA_FETCH_ERROR,
        error
    }
}

export function fetchRaspData(url) {
    return (dispatch) => {
        dispatch(fetchRaspDataLoading())
        fetch(url)
            .then(response => response.json())
            .catch(error => dispatch(fetchRaspDataError(error)))
            .then(raspData => dispatch(fetchRaspDataSuccess(raspData)))
    }
}