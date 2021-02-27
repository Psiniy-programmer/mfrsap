const UPDATE_TIME = 'UPDATE_TIME';
const GET_DIFFERENCE = 'GET_DIFFERENCE';
const GET_DAY_INDEX = 'GET_DAY_INDEX';
const UPDATE_DAY_INDEX = 'UPDATE_DAY_INDEX';
const WEEK_IS_ODD = 'WEEK_IS_ODD';

const initialState = {
    date: new Date(),
    dayIndex: 0,
    isOdd: true,
    diff: {
        soon: false,
        min: null
    }
}

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
    11: 31 // Декабрь
}

export default function appTimer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_TIME:
        return (state = {
          ...state,
          date: new Date(),
        });
      case GET_DIFFERENCE:
        const t = action.pairTime.split(":").map((i) => Number(i));

        if (t[0] - state.date.getHours() === 0) {
          return {
            ...state,
            diff: {
              soon: true,
              min: t - state.date.getMinutes(),
            },
          };
        } else {
          return {
            ...state,
            diff: {
              soon: false,
              min: null,
            },
          };
        }
      case GET_DAY_INDEX:
        let index = state.date.getDay() - 1;
        return {
          ...state,
          dayIndex: index === -1 ? (index = 0) : index,
        };
      case WEEK_IS_ODD:
        let currentNumber = state.date.getDate(),
          currentMonth = state.date.getMonth(),
          countWeeks = 1; // 1 т.к начинаем с 1 недели

        while (currentNumber > 7 && currentMonth !== 8) {
          currentNumber -= 7;

          if (currentMonth > 8 && currentNumber < 7) {
            currentNumber += daysInYear[currentMonth];
            currentMonth--;
          }
          countWeeks++;
        }

        return {
          ...state,
          isOdd: countWeeks % 2 === 1 ? true : false,
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

export {GET_DAY_INDEX, GET_DIFFERENCE, UPDATE_TIME, WEEK_IS_ODD, UPDATE_DAY_INDEX};
