const CHANGE_WINDOW_SIZES = 'CHANGE_WINDOW_SIZES';

const initialState = {
    height: window.innerHeight,
    width: window.innerWidth
}

export default function windowSizes(state = initialState, action) {
    switch (action.type) {
        case CHANGE_WINDOW_SIZES :
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        default: return state
    }
}

export {CHANGE_WINDOW_SIZES};
