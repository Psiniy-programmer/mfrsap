const initialState = {
    loading: null,
    data: [],
    error: ''
};

export default function teachersList(state = initialState, action) {
    switch (action.type) {
        case 'TEACHERS_DATA_FETCH_LOADING' :
            return {
                ...state,
                loading: true
            };
        case 'TEACHERS_DATA_FETCH_ERROR' :
            return {
                loading: false,
                data: [],
                error: action.error
            };
        case 'TEACHERS_DATA_FETCH_OK' :
            return {
                loading: false,
                data: action.teachersList,
                error: ''
            };
        default :
            return state
    }
}