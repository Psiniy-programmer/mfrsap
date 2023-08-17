import {
    RASP_CONFIG_FETCH_ERROR,
    RASP_CONFIG_FETCH_LOADING,
    RASP_CONFIG_FETCH_OK
} from "../reducers/raspConfig";
import api from "../helpers/api";

function fetchRaspConfigSuccess(raspConfig) {
    return {
        type: RASP_CONFIG_FETCH_OK,
        raspConfig
    }
}

function fetchRaspConfigLoading() {
    return {
        type: RASP_CONFIG_FETCH_LOADING
    }
}

function fetchRaspConfigError(error) {
    return {
        type: RASP_CONFIG_FETCH_ERROR,
        error
    }
}

export function fetchRaspConfig() {
    return (dispatch) => {
        dispatch(fetchRaspConfigLoading())
        fetch(api.raspConfig)
            .then(response => response.json())
            .catch(error => dispatch(fetchRaspConfigError(error)))
            .then(raspConfig => dispatch(fetchRaspConfigSuccess(raspConfig)))
    }
}