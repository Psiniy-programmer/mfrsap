const initialState = {
    loading: null,
    data: [],
    error: ''
};

export default function auditoryList(state = initialState, action) {
    switch (action.type) {
        case 'AUDITORY_DATA_FETCH_LOADING'  :
            return {
                ...state,
                loading: true
            };
        case 'AUDITORY_DATA_FETCH_ERROR' :
            return {
                loading: false,
                data: [],
                error: action.error
            };
        case 'AUDITORY_DATA_FETCH_OK' :
            return {
                loading: false,
                data: action.auditoryList,
                error: ''
            };
        default :
            return state
    }
}