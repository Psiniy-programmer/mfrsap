function fetchAuditoryDataSuccess(auditoryList) {
    return {
        type: 'AUDITORY_DATA_FETCH_OK',
        auditoryList
    }
}

function fetchAuditoryDataLoading() {
    return {
        type : 'AUDITORY_DATA_FETCH_LOADING'
    }
}

function fetchAuditoryDataError(error) {
    return {
        type : 'AUDITORY_DATA_FETCH_ERROR',
        error
    }
}

export function fetchAuditoryData(url) {
    return (dispatch) => {
        dispatch(fetchAuditoryDataLoading())
        fetch(url)
            .then(response => response.json())
            .catch(error => fetchAuditoryDataError(error))
            .then(auditoryList => dispatch(fetchAuditoryDataSuccess(auditoryList)))
    }
}