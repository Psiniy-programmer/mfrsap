import raspData from '../reducers/raspData.js';

it('Прокидывание расписания пар для группы в store', () => {
    let initState = {
        'year': 2019,
        'group': 'k3-13b',
        'semestr': 1,
        'faculty': 'K',
        'day': [{}, {}, {}, {}, {}, {}]
    }
    let action = {type: 'GROUP_RASP_DATA_FETCH_OK', groupRaspData: initState};
    let newState = raspData([], action);
    expect(newState.year).toBe(2019);
    expect(newState.group).toBe('k3-13b');
    expect(newState.semestr).toBe(1);
    expect(newState.faculty).toBe('K');
    expect(newState.day.length).toBe(6);
});

it('Прокидывание расписания пар для препода в store', () => {
    let initState = {
        'year': 2019,
        'teacher': 'Владимиров Харитон Авдеевич',
        'semestr': 1,
        'day': [{}, {}, {}, {}, {}, {}]
    }
    let action = {type: 'TEACHER_RASP_DATA_FETCH_OK', teacherRaspData: initState};
    let newState = raspData([], action);
    expect(newState.year).toBe(2019);
    expect(newState.teacher).toBe('Владимиров Харитон Авдеевич');
    expect(newState.semestr).toBe(1);
    expect(newState.day.length).toBe(6);
});

it('Прокидывание расписания пар для аутории в store', () => {
    let initState = {
        'year': 2019,
        'aud': '239',
        'semestr': 1,
        'day': [{}, {}, {}, {}, {}, {}]
    }
    let action = {type: 'AUDITORY_RASP_DATA_FETCH_OK', auditoryRaspData: initState};
    let newState = raspData([], action);
    expect(newState.year).toBe(2019);
    expect(newState.aud).toBe('239');
    expect(newState.semestr).toBe(1);
    expect(newState.day.length).toBe(6);
});