const ADD_GROUP_ITEM = 'ADD_GROUP_ITEM';
const REMOVE_GROUP_ITEM = 'REMOVE_GROUP_ITEM';
const ADD_AUD_ITEM = 'ADD_AUD_ITEM';
const REMOVE_AUD_ITEM = 'REMOVE_AUD_ITEM';
const ADD_TEACHER_ITEM = 'ADD_TEACHER_ITEM';
const REMOVE_TEACHER_ITEM = 'REMOVE_TEACHER_ITEM';

const initialState = {
    groups: [],
    teachers: [],
    auditoryies: []
};

export default function favoriteStorage(state = initialState, action) {
    let temp = {
        groups:state.groups,
        teachers: state.teachers,
        auditoryies: state.auditoryies
    }
    switch (action.type) {
        case ADD_GROUP_ITEM :
            temp.groups.push(action.item);
            return state = temp;
        case REMOVE_GROUP_ITEM :
            return {
                ...state,
                groups: state.groups.filter((group,index) => group !== action.item && state.groups.indexOf(group) === index)
            }
        case ADD_AUD_ITEM :
            temp.auditoryies.push(action.item);
            return state = temp;
        case REMOVE_AUD_ITEM :
            return {
                ...state,
                auditoryies: state.auditoryies.filter(auditory => auditory !== action.item)
            }
        case ADD_TEACHER_ITEM :
            temp.teachers.push(action.item);
            return state = temp;
        case REMOVE_TEACHER_ITEM :
            return {
                ...state,
                teachers: state.teachers.filter(teacher => teacher !== action.item)
            }
        default :
            return state
    }
}

export {ADD_AUD_ITEM, ADD_GROUP_ITEM, ADD_TEACHER_ITEM, REMOVE_AUD_ITEM, REMOVE_GROUP_ITEM, REMOVE_TEACHER_ITEM};
