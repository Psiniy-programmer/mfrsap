const AUDITORY_DATA_FETCH_LOADING = 'AUDITORY_DATA_FETCH_LOADING';
const AUDITORY_DATA_FETCH_ERROR = 'AUDITORY_DATA_FETCH_ERROR';
const AUDITORY_DATA_FETCH_OK = 'AUDITORY_DATA_FETCH_OK';

const initialState = {
    loading: null,
    data: [],
    error: ''
};

export default function auditoryList(state = initialState, action) {
    switch (action.type) {
        case AUDITORY_DATA_FETCH_LOADING  :
            return {
                ...state,
                loading: true
            };
        case AUDITORY_DATA_FETCH_ERROR :
            return {
                loading: false,
                data: [],
                error: action.error
            };
        case AUDITORY_DATA_FETCH_OK :
            return {
                loading: false,
                data: action.auditoryList,
                error: ''
            };
        default :
            return state
    }
}

export {AUDITORY_DATA_FETCH_ERROR, AUDITORY_DATA_FETCH_OK, AUDITORY_DATA_FETCH_LOADING};
