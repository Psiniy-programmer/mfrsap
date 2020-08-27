function fetchRaspDataSuccess(groupRaspData) {
    return {
        type: 'GROUP_RASP_DATA_FETCH_OK',
        groupRaspData
    }
}

export function fetchGroupRaspData(url) {
    return (dispatch) => {
        fetch( url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response
            })
            .then(response => response.json())
            .then(groupRaspData => dispatch(fetchRaspDataSuccess(groupRaspData)))
    }
}