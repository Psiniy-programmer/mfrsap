import teachersList from '../reducers/teachersList.js';

it('Прокидывание списка преподов в store', () => {
    let action = {type: 'TEACHERS_DATA_FETCH_OK', teachersList : [{'name': 'Полуэкт'},{'name':'Афанас'}]};
    let newState = teachersList([],action);
    expect(newState.length).toBe(2)
});