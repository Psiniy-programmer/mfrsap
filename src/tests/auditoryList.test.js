import auditoryList from '../reducers/auditoryList';

it('Прокидывание списка аудиторий в store', () => {
    let action = {type: 'AUDITORY_DATA_FETCH_OK', auditoryList: [{'aud': '430'}, {'aud': '230'}]};
    let newState = auditoryList([], action);
    expect(newState.length).toBe(2)
});