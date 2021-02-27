import {
    CHANGE_WINDOW_SIZES
} from '../reducers/windowSizes';

const update = () => {
    return {
        type: CHANGE_WINDOW_SIZES
    }
}

export function resizeWindow() {
    return (dispatch) => {
        dispatch(update())
    }
}