import filterItems from '../reducers/filterItems.js';

it('Прокидывание в состояние для поисковой строки', () => {
    let payload = 'kekTestWord';
    let action = {type: 'FIND_ITEM', payload};
    let newState = filterItems('', action);
    expect(newState).toBe('kekTestWord');
})