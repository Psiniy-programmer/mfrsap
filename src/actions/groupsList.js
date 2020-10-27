function fetchGroupsDataSuccess(groupsList) {
    return {
        type: 'GROUPS_DATA_FETCH_OK',
        groupsList
    }
}

function fetchGroupsDataLoading() {
    return {
        type: 'GROUPS_DATA_FETCH_LOADING'
    }
}

function fetchGroupsDataError(error) {
    return {
        type: 'GROUPS_DATA_FETCH_ERROR',
        error
    }
}

export function fetchGroupsData(url) {
    return (dispatch) => {
        dispatch(fetchGroupsDataLoading())
        fetch(url)
            .then(response => response.json())
            .catch(error => dispatch(fetchGroupsDataError(error)))
            .then(groupsList => dispatch(fetchGroupsDataSuccess(groupsList)))
    }
}