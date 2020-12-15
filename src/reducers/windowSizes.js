import ActionsConst from '../helpers/actionsConst'

const initialState = {
    height: window.innerHeight,
    width: window.innerWidth
}

export default function windowSizes(state = initialState, action) {
    console.log('s')
    switch (action.type) {
        case ActionsConst.CHANGE_WINDOW_SIZES :
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        default: return state
    }
}