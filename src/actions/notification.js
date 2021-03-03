import {
  NOTIFY_FETCH_LOADING,
  NOTIFY_FETCH_ERROR,
  NOTIFY_FETCH_OK,
} from "../reducers/notification";

const URL = "https://mf.bmstu.ru/rasp/test/?type=7";

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
    fetch(URL)
      .then((response) => response.json())
      .catch((error) => fetchNotifyDataError(error))
      .then((notification) => dispatch(fetchNotifyDataSuccess(notification)));
  };
}
