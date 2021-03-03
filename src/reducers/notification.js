const NOTIFY_FETCH_LOADING = "NOTIFY_FETCH_LOADING";
const NOTIFY_FETCH_OK = "NOTIFY_FETCH_OK";
const NOTIFY_FETCH_ERROR = "NOTIFY_FETCH_ERROR";

const initialState = {
  loading: null,
  data: [],
  error: "",
};

export default function notification(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case NOTIFY_FETCH_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case NOTIFY_FETCH_OK:
      return {
        loading: false,
        data: action.notification,
        error: "",
      };
    default:
      return state;
  }
}

export { NOTIFY_FETCH_OK, NOTIFY_FETCH_ERROR, NOTIFY_FETCH_LOADING };
