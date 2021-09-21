import consts from "../helpers/consts";

const CHANGE_WINDOW_SIZES = 'CHANGE_WINDOW_SIZES';

const initialState = {
    height: window.innerHeight,
    width: window.innerWidth,
    isMobile: window.innerWidth < consts.DESKTOP_MIN_WIDTH
}

export default function windowSizes(state = initialState, action) {
    switch (action.type) {
        case CHANGE_WINDOW_SIZES :
            return {
                height: window.innerHeight,
                width: window.innerWidth,
                isMobile: window.innerWidth < consts.DESKTOP_MIN_WIDTH
            }
        default:
            return state
    }
}

export {CHANGE_WINDOW_SIZES};
