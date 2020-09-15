function fetchRaspDataSuccess(auditoryRaspData) {
    return {
        type: 'AUDITORY_RASP_DATA_FETCH_OK',
        auditoryRaspData
    }
}

export function fetchAuditoryRaspData(url) {
    return (dispatch) => {
        fetch( url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response
            })
            .then(response => response.json())
            .then(auditoryRaspData => dispatch(fetchRaspDataSuccess(auditoryRaspData)))
    }
}