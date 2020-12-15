import ActionsConst from '../helpers/actionsConst'

const update = () => {
    return {
        type: ActionsConst.CHANGE_WINDOW_SIZES
    }
}

export function resizeWindow() {
    return (dispatch) => {
        dispatch(update())
    }
}