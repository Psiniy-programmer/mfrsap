const SET_GROUPS = "SET_GROUPS";

const initialState = [];

export default function newGroupsList(state = initialState, action) {
    switch (action.type) {
        case SET_GROUPS:
            return state = action.payload;
        default:
            return state;
    }
}

export {SET_GROUPS};
