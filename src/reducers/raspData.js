const initialState = {
    loading: null,
    data: [],
    error: ''
}

export default function raspData(state = initialState, action) {
    switch (action.type) {
        case 'RASP_DATA_FETCH_LOADING' :
            return {
                ...state,
                loading: true
            }
        case 'RASP_DATA_FETCH_ERROR' :
            return {
                loading: false,
                data: [],
                error: action.error
            }
        case 'RASP_DATA_FETCH_OK' :
            return {
                loading: false,
                data: action.raspData,
                error: ''
            };
        default :
            return state;
    }
}