import sideBarToggler from '../reducers/sideBarToggler.js';

const initialState = {
    isOpen: false,
    sideBarClassName: 'SideBar',
    contentClassName : 'content'
}

it('Триггер состояния меню', () => {
    let action = {type: 'TOGGLE'};
    let newState = sideBarToggler(initialState, action);

    expect(newState.isOpen).toBe(true);
    newState = sideBarToggler(newState, action);
    expect(newState.isOpen).toBe(false);
});

it('Изменение классов для меню', () => {
    let action = {type: 'TOGGLE'};
    let newState = sideBarToggler(initialState, action);

    expect(newState.sideBarClassName).toBe('SideBar open');
    newState = sideBarToggler(newState, action);
    expect(newState.sideBarClassName).toBe('SideBar closed');
});

it('Изменение классов для контента', () => {
    let action = {type: 'TOGGLE'};
    let newState = sideBarToggler(initialState, action);

    expect(newState.contentClassName).toBe('content hidden');
    newState = sideBarToggler(newState, action);
    expect(newState.contentClassName).toBe('content visible');
});