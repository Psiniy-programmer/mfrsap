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
        case 'ADD_GROUP_ITEM' :
            temp.groups.push(action.item);
            return state = temp;
        case 'REMOVE_GROUP_ITEM' :
            return {
                ...state,
                groups: state.groups.filter((group,index) => group !== action.item && state.groups.indexOf(group) === index)
            }
        case 'ADD_AUD_ITEM' :
            temp.auditoryies.push(action.item);
            return state = temp;
        case 'REMOVE_AUD_ITEM' :
            return {
                auditoryies: state.auditoryies.filter(auditory => auditory !== action.item),
                ...state
            }
        case 'ADD_TEACHER_ITEM' :
            temp.auditoryies.push(action.item);
            return state = temp;
        case 'REMOVE_TEACHER_ITEM' :
            return {
                teachers: state.teachers.filter(teacher => teacher !== action.item),
                ...state
            }
        default :
            return state
    }
}