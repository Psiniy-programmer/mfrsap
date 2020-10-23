const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default function groupsList(state = initialState, action) {
    switch (action.type) {
        case 'GROUPS_DATA_FETCH_LOADING' :
            return {
                ...state,
                loading: true
            }
        case 'GROUPS_DATA_FETCH_ERROR' :
            return {
                loading: false,
                data: [],
                error: action.error
            }
        case 'GROUPS_DATA_FETCH_OK' :
            return {
                loading: false,
                data: action.groupsList,
                error: ''
            }
        default :
            return state
    }
}