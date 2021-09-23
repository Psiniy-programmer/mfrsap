import {NOTIFY_FETCH_ERROR, NOTIFY_FETCH_LOADING, NOTIFY_FETCH_OK,} from "../reducers/notification";
import api from "../helpers/api";

function fetchNotifyDataSuccess(notification) {
    return {
        type: NOTIFY_FETCH_OK,
        notification,
    };
}

function fetchNotifyDataLoading() {
    return {
        type: NOTIFY_FETCH_LOADING,
    };
}

function fetchNotifyDataError(error) {
    return {
        type: NOTIFY_FETCH_ERROR,
        error,
    };
}

export function fetchNotifyData() {
    return (dispatch) => {
        dispatch(fetchNotifyDataLoading());
        fetch(api.announcements)
            .then((response) => response.json())
            .catch((error) => dispatch(fetchNotifyDataError(error)))
            .then((notification) => dispatch(fetchNotifyDataSuccess(notification)));
    };
}
