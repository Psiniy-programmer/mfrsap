import facultyList from '../reducers/facultyList.js';

it('Прокидывание списка факультетов в store', () => {
    let action = {
        type: 'FACULTY_DATA_FETCH_OK',
        facultyList: [{'name': 'кф'}, {'name': 'лт'}, {'name': 'аспирантура'}]
    };
    let newState = facultyList([], action);
    expect(newState.length).toBe(3);
});