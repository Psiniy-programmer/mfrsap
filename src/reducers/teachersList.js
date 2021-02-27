const TEACHERS_DATA_FETCH_LOADING = 'TEACHERS_DATA_FETCH_LOADING';
const TEACHERS_DATA_FETCH_ERROR = 'TEACHERS_DATA_FETCH_ERROR';
const TEACHERS_DATA_FETCH_OK = 'TEACHERS_DATA_FETCH_OK';

const initialState = {
    loading: null,
    data: [],
    error: ''
};

export default function teachersList(state = initialState, action) {
    switch (action.type) {
        case TEACHERS_DATA_FETCH_LOADING :
            return {
                ...state,
                loading: true
            };
        case TEACHERS_DATA_FETCH_ERROR :
            return {
                loading: false,
                data: [],
                error: action.error
            };
        case TEACHERS_DATA_FETCH_OK :
            return {
                loading: false,
                data: action.teachersList,
                error: ''
            };
        default :
            return state
    }
}

export {TEACHERS_DATA_FETCH_ERROR, TEACHERS_DATA_FETCH_OK, TEACHERS_DATA_FETCH_LOADING};
