import {ALTLIST_DATA_FETCH_ERROR, ALTLIST_DATA_FETCH_LOADING, ALTLIST_DATA_FETCH_OK,} from "../reducers/altList";
import api from "../helpers/api";

function fetchAltListSuccess(altList) {
    return {
        type: ALTLIST_DATA_FETCH_OK,
        altList,
    };
}

function fetchAltListLoading() {
    return {
        type: ALTLIST_DATA_FETCH_LOADING,
    };
}

function fetchAltListError(error) {
    return {
        type: ALTLIST_DATA_FETCH_ERROR,
        error,
    };
}

export function fetchAltList() {
    return (dispatch) => {
        dispatch(fetchAltListLoading());
        fetch(api.lists.alt)
            .then((response) => response.json())
            .catch((error) => dispatch(fetchAltListError(error)))
            .then((altList) => dispatch(fetchAltListSuccess(altList)));
    };
}
