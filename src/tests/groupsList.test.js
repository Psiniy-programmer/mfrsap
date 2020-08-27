import groupsList from '../reducers/groupsList.js';

it('Прокидывание списка групп в store', () => {
    let action = {type: 'GROUPS_DATA_FETCH_OK', groupsList : [{'name' : 'к3-43'},{'name':'лт2-1б'}]};
    let newState = groupsList([],action);
    expect(newState.length).toBe(2);
});