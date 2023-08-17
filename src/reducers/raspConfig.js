const RASP_CONFIG_FETCH_OK = 'RASP_CONFIG_FETCH_OK';
const RASP_CONFIG_FETCH_ERROR = 'RASP_CONFIG_FETCH_ERROR';
const RASP_CONFIG_FETCH_LOADING = 'RASP_CONFIG_FETCH_LOADING';

const initialState = {
    data: {},
    error: '',
    loading: null
};

export default function raspConfig(state = initialState, action) {
    switch (action.type) {
        case RASP_CONFIG_FETCH_LOADING :
            return {
                ...state,
                loading: true
            };
        case RASP_CONFIG_FETCH_ERROR :
            return {
                data: {},
                error: action.error,
                loading: false
            };
        case RASP_CONFIG_FETCH_OK :
            return {
                data: action.raspConfig,
                error: '',
                loading: false
            };
        default :
            return state
    }
}

export {
    RASP_CONFIG_FETCH_OK,
    RASP_CONFIG_FETCH_ERROR,
    RASP_CONFIG_FETCH_LOADING
};
