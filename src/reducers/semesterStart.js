const SEMESTER_START_FETCH_OK = 'SEMESTER_START_FETCH_OK';
const SEMESTER_START_FETCH_ERROR = 'SEMESTER_START_FETCH_ERROR';
const SEMESTER_START_FETCH_LOADING = 'SEMESTER_START_FETCH_LOADING';

const initialState = {
    data: {},
    error: '',
    loading: null
};

export default function semesterStart(state = initialState, action) {
    switch (action.type) {
        case SEMESTER_START_FETCH_LOADING :
            return {
                ...state,
                loading: true
            };
        case SEMESTER_START_FETCH_ERROR :
            return {
                data: {},
                error: action.error,
                loading: false
            };
        case SEMESTER_START_FETCH_OK :
            return {
                data: action.semesterStart,
                error: '',
                loading: false
            };
        default :
            return state
    }
}

export {
    SEMESTER_START_FETCH_OK,
    SEMESTER_START_FETCH_ERROR,
    SEMESTER_START_FETCH_LOADING
};
