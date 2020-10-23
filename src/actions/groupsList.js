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
        fetch(url)
            .then(response => {
                response.ok ? dispatch(fetchGroupsDataLoading()) : dispatch(fetchGroupsDataError(response.statusText))
                return response;
            })
            .then(response => response.json())
            .then(groupsList => dispatch(fetchGroupsDataSuccess(groupsList)))
    }
}