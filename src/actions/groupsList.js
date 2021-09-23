import {GROUPS_DATA_FETCH_ERROR, GROUPS_DATA_FETCH_LOADING, GROUPS_DATA_FETCH_OK,} from "../reducers/groupsList";
import api from "../helpers/api";

function fetchGroupsDataSuccess(groupsList) {
    return {
        type: GROUPS_DATA_FETCH_OK,
        groupsList,
    };
}

function fetchGroupsDataLoading() {
    return {
        type: GROUPS_DATA_FETCH_LOADING,
    };
}

function fetchGroupsDataError(error) {
    return {
        type: GROUPS_DATA_FETCH_ERROR,
        error,
    };
}

export function fetchGroupsData() {
    return (dispatch) => {
        dispatch(fetchGroupsDataLoading());
        fetch(api.lists.group)
            .then((response) => response.json())
            .catch((error) => dispatch(fetchGroupsDataError(error)))
            .then((groupsList) => dispatch(fetchGroupsDataSuccess(groupsList)))
    };
};
