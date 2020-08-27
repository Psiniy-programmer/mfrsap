function fetchAuditoryDataSuccess(auditoryList) {
    return {
        type: 'AUDITORY_DATA_FETCH_OK',
        auditoryList
    }
}

export function fetchAuditoryData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response
            })
            .then(response => response.json())
            .then(auditoryList => dispatch(fetchAuditoryDataSuccess(auditoryList)))
    }
}