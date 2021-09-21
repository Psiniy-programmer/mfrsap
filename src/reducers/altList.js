const ALTLIST_DATA_FETCH_ERROR = "ALTLIST_DATA_FETCH_ERROR";
const ALTLIST_DATA_FETCH_LOADING = "ALTLIST_DATA_FETCH_LOADING";
const ALTLIST_DATA_FETCH_OK = "ALTLIST_DATA_FETCH_OK";

const initialState = {
    loading: null,
    data: {},
    error: "",
};

export default function altList(state = initialState, action) {
    switch (action.type) {
        case ALTLIST_DATA_FETCH_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ALTLIST_DATA_FETCH_ERROR:
            return {
                loading: false,
                data: {},
                error: action.error,
            };
        case ALTLIST_DATA_FETCH_OK:
            return {
                loading: false,
                data: action.altList,
                error: "",
            };
        default:
            return state;
    }
}

export {
    ALTLIST_DATA_FETCH_ERROR,
    ALTLIST_DATA_FETCH_LOADING,
    ALTLIST_DATA_FETCH_OK,
};
