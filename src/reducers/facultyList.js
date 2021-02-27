const FACULTY_DATA_FETCH_LOADING = 'FACULTY_DATA_FETCH_LOADING';
const FACULTY_DATA_FETCH_ERROR = 'FACULTY_DATA_FETCH_ERROR';
const FACULTY_DATA_FETCH_OK = 'FACULTY_DATA_FETCH_OK';

const initialState = {
    loading: null,
    data: [],
    error: ''
};

export default function facultyList(state = initialState, action) {
    switch (action.type) {
        case FACULTY_DATA_FETCH_LOADING :
            return {
                ...state,
                loading: true
            };
        case FACULTY_DATA_FETCH_ERROR :
            return {
                loading: false,
                data: [],
                error: action.error
            };
        case FACULTY_DATA_FETCH_OK :
            return {
                loading: false,
                data: action.facultyList,
                error: ''
            };
        default :
            return state
    }
}

export {FACULTY_DATA_FETCH_ERROR, FACULTY_DATA_FETCH_OK, FACULTY_DATA_FETCH_LOADING};
