const UPDATE_TIME = 'UPDATE_TIME';
const GET_DAY_INDEX = 'GET_DAY_INDEX';
const UPDATE_DAY_INDEX = 'UPDATE_DAY_INDEX';
const WEEK_IS_ODD = 'WEEK_IS_ODD';

const d = new Date();

const initialState = {
  date: d,
  dayIndex: 0,
  todayIndex: d.getDay(),
  isOdd: true,
};

const daysInYear = {
  0: 31, // Январь
  1: initialState.date.getFullYear() % 4 === 0 ? 29 : 28, // Февраль
  2: 31, // Март
  3: 30, // Апрель
  4: 31, // Май
  5: 30, // Июнь
  6: 31, // Июль
  7: 31, // Август
  8: 30, // Сентябрь
  9: 31, // Октябрь
  10: 30, // Ноябрь
  11: 31, // Декабрь
};

export default function appTimer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        date: new Date(),
      };
    case GET_DAY_INDEX:
      let index = state.date.getDay() - 1;
      return {
        ...state,
        dayIndex: index === -1 ? (index = 0) : index,
      };
    case WEEK_IS_ODD:
      return {
        ...state,
        isOdd: new Date().getWeek() % 2 === 0,
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
  UPDATE_DAY_INDEX,
};
