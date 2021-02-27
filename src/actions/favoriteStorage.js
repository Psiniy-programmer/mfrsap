import {
    ADD_AUD_ITEM,
    ADD_GROUP_ITEM,
    ADD_TEACHER_ITEM,
    REMOVE_AUD_ITEM,
    REMOVE_GROUP_ITEM,
    REMOVE_TEACHER_ITEM
} from '../reducers/favoriteStorage';

const addGroupItem = item => {
    return {
        type: ADD_GROUP_ITEM,
        item
    }
}

const removeGroupItem = item => {
    return {
        type: REMOVE_GROUP_ITEM,
        item
    }
}

const addAudItem = item => {
    return {
        type: ADD_AUD_ITEM,
        item
    }
}

const removeAudItem = item => {
    return {
        type: REMOVE_AUD_ITEM,
        item
    }
}

const addTeacherItem = item => {
    return {
        type: ADD_TEACHER_ITEM,
        item
    }
}

const removeTeacherItem = item => {
    return {
        type: REMOVE_TEACHER_ITEM,
        item
    }
}

const addToFavorite = item => {
    const {type, name} = item;
    return (dispatch) => {
        localStorage.setItem(name, type);
        switch (type) {
            case 'aud' :
                return dispatch(addAudItem(name))
            case 'group' :
                return dispatch(addGroupItem(name))
            case 'teacher' :
                return dispatch(addTeacherItem(name))
            case 'error' :
                return console.log('error')
            default:
                break;
        }
    }
}

const removeFromFavorite = item => {
    const {type, name} = item;
    return (dispatch) => {
        localStorage.removeItem(name);
        switch (type) {
            case 'aud' :
                return dispatch(removeAudItem(name))
            case 'group' :
                return dispatch(removeGroupItem(name))
            case 'teacher' :
                return dispatch(removeTeacherItem(name))
            case 'error' :
                return console.log('error')
            default:
                break;
        }
    }
}

export {addToFavorite, removeFromFavorite}