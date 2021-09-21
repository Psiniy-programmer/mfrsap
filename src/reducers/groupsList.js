const GROUPS_DATA_FETCH_LOADING = "GROUPS_DATA_FETCH_LOADING";
const GROUPS_DATA_FETCH_ERROR = "GROUPS_DATA_FETCH_ERROR";
const GROUPS_DATA_FETCH_OK = "GROUPS_DATA_FETCH_OK";

const initialState = {
    loading: null,
    data: [],
    error: "",
};

export default function groupsList(state = initialState, action) {
    switch (action.type) {
        case GROUPS_DATA_FETCH_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GROUPS_DATA_FETCH_ERROR:
            return {
                loading: false,
                data: [],
                error: action.error,
            };
        case GROUPS_DATA_FETCH_OK:
            return {
                loading: false,
                data: action.groupsList,
                error: "",
            };
        default:
            return state;
    }
}

export {
    GROUPS_DATA_FETCH_ERROR,
    GROUPS_DATA_FETCH_OK,
    GROUPS_DATA_FETCH_LOADING,
};
