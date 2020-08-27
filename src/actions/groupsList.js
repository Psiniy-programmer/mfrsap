function fetchGroupsDataSuccess(groupsList) {
    return {
        type: 'GROUPS_DATA_FETCH_OK',
        groupsList
    }
}

export function fetchGroupsData(url) {
    return (dispatch) => {
        fetch( url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response
            })
            .then(response => response.json())
            .then(groupsList => dispatch(fetchGroupsDataSuccess(groupsList)))
    }
}