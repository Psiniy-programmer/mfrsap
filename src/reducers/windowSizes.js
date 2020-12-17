import ActionsConst from '../helpers/consts'

const initialState = {
    height: window.innerHeight,
    width: window.innerWidth
}

export default function windowSizes(state = initialState, action) {
    switch (action.type) {
        case ActionsConst.CHANGE_WINDOW_SIZES :
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        default: return state
    }
}