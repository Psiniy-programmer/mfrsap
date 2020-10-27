const initialState = {
    loading: null,
    data: [],
    error: ''
};

export default function facultyList(state = initialState, action) {
    switch (action.type) {
        case 'FACULTY_DATA_FETCH_LOADING' :
            return {
                ...state,
                loading: true
            };
        case 'FACULTY_DATA_FETCH_ERROR' :
            return {
                loading: false,
                data: [],
                error: action.error
            };
        case 'FACULTY_DATA_FETCH_OK' :
            return {
                loading: false,
                data: action.facultyList,
                error: ''
            };
        default :
            return state
    }
}