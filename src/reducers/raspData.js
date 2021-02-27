const RASP_DATA_FETCH_LOADING = 'RASP_DATA_FETCH_LOADING';
const RASP_DATA_FETCH_ERROR = 'RASP_DATA_FETCH_ERROR';
const RASP_DATA_FETCH_OK = 'RASP_DATA_FETCH_OK';

const initialState = {
    loading: null,
    data: [],
    error: ''
}

export default function raspData(state = initialState, action) {
    switch (action.type) {
        case RASP_DATA_FETCH_LOADING :
            return {
                ...state,
                loading: true
            }
        case RASP_DATA_FETCH_ERROR :
            return {
                loading: false,
                data: [],
                error: action.error
            }
        case RASP_DATA_FETCH_OK :
            return {
                loading: false,
                data: action.raspData,
                error: ''
            };
        default :
            return state;
    }
}

export {RASP_DATA_FETCH_ERROR, RASP_DATA_FETCH_OK, RASP_DATA_FETCH_LOADING};
