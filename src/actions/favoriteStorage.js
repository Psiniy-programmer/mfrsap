const checkTypeOfItem = item => {
    if (item.aud !== undefined) return 'aud';
    if (item.group !== undefined) return 'group';
    if (item.teacher !== undefined) return 'teacher';
    return 'error';
}

const addGroupItem = item => {
    return {
        type: 'ADD_GROUP_ITEM',
        item
    }
}

const removeGroupItem = item => {
    return {
        type: 'REMOVE_GROUP_ITEM',
        item
    }
}

const addAudItem = item => {
    return {
        type: 'ADD_AUD_ITEM',
        item
    }
}

const removeAudItem = item => {
    return {
        type: 'REMOVE_AUD_ITEM',
        item
    }
}

const addTeacherItem = item => {
    return {
        type: 'ADD_TEACHER_ITEM',
        item
    }
}

const removeTeacherItem = item => {
    return {
        type: 'REMOVE_TEACHER_ITEM',
        item
    }
}

const addToFavorite = item => {
    return (dispatch) => {
        switch (checkTypeOfItem(item)) {
            case 'aud' :
                return dispatch(addAudItem(item))
            case 'group' :
                return dispatch(addGroupItem(item))
            case 'teacher' :
                return dispatch(addTeacherItem(item))
            case 'error' :
                return throw new Error('undefined item!')
            default:
                break;
        }
    }
}

const removeFromFavorite = item => {
    return (dispatch) => {
        switch (checkTypeOfItem(item)) {
            case 'aud' :
                return dispatch(removeAudItem(item))
            case 'group' :
                return dispatch(removeGroupItem(item))
            case 'teacher' :
                return dispatch(removeTeacherItem(item))
            case 'error' :
                return throw new Error('undefined item!')
            default:
                break;
        }
    }
}

export default {addToFavorite, removeFromFavorite}