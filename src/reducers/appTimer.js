import {getWeek} from "../helpers/helpers";

const UPDATE_TIME = 'UPDATE_TIME';
const GET_DAY_INDEX = 'GET_DAY_INDEX';
const UPDATE_DAY_INDEX = 'UPDATE_DAY_INDEX';
const WEEK_IS_ODD = 'WEEK_IS_ODD';
const WEEK_NUMBER = 'WEEK_NUMBER';

const d = new Date();

const initialState = {
    date: d,
    dayIndex: 0,
    todayIndex: d.getDay(),
    firstWeekMonday: new Date("2023-08-28"), // должна приходить с бэка (дата понедельника первой учебной недели)
    semesterStartDate: new Date("2023-09-01"), // должна приходить с бэка (дата начала учёбы в семестре)
    weekNumber: 0,
    isOdd: true,
};

export default function appTimer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TIME:
            return {
                ...state,
                date: new Date(),
                todayIndex: new Date().getDay()
            };
        case GET_DAY_INDEX:
            let index = state.date.getDay() - 1;
            return {
                ...state,
                dayIndex: index === -1 ? (index = 0) : index
            };
        case WEEK_IS_ODD:
            return {
                ...state,
                isOdd: getWeek(state.firstWeekMonday, state.semesterStartDate) % 2,
            };
        case WEEK_NUMBER:
            return {
                ...state,
                weekNumber: getWeek(state.firstWeekMonday, state.semesterStartDate),
            };
        case UPDATE_DAY_INDEX:
            return {
                ...state,
                dayIndex: action.index,
            };
        default:
            return state;
    }
}

export {
    GET_DAY_INDEX,
    UPDATE_TIME,
    WEEK_IS_ODD,
    WEEK_NUMBER,
    UPDATE_DAY_INDEX,
};
