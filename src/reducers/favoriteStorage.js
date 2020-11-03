const initialState = {
    groups: [],
    teachers: [],
    auditoryies: []
};

export default function favoriteStorage(state = initialState, action) {
    switch (action.type) {
        case 'ADD_GROUP_ITEM' :
            return {
                groups : state.groups.push(action.item),
                ...state
            };
        case 'REMOVE_GROUP_ITEM' :
            return {
                groups: state.groups.filter(group => group !== action.item),
                ...state
            }
        case 'ADD_AUD_ITEM' :
            return {
                auditoryies: this.auditoryies.push(action.item),
                ...state
            };
        case 'REMOVE_AUD_ITEM' :
            return {
                auditoryies: this.auditoryies.filter(auditory => auditory !== action.item),
                ...state
            }
        case 'ADD_TEACHER_ITEM' :
            return {
                teachers: this.teachers.push(action.item),
                ...state
            }
        case 'REMOVE_TEACHER_ITEM' :
            return {
                teachers: this.teachers.filter(teacher => teacher !== action.item),
                ...state
            }
        default :
            return state
    }
}