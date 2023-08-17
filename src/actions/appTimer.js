import {
    GET_DAY_INDEX,
    UPDATE_DAY_INDEX,
    UPDATE_TIME,
    WEEK_IS_ODD,
    WEEK_NUMBER
} from '../reducers/appTimer';

function updateTime() {
    return {
        type: UPDATE_TIME
    }
}

function getDayIndex() {
    return {
        type: GET_DAY_INDEX
    }
}

function weekIsOdd(raspConfig) {
    return {
        type: WEEK_IS_ODD,
        raspConfig
    }
}

function getWeekNumber(raspConfig) {
    return {
        type: WEEK_NUMBER,
        raspConfig
    }
}

function updateDayIndex(index) {
    return {
        type: UPDATE_DAY_INDEX,
        index
    }
}

export {
    updateTime,
    getDayIndex,
    weekIsOdd,
    getWeekNumber,
    updateDayIndex
};
