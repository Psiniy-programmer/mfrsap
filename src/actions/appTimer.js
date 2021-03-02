import {
    GET_DAY_INDEX,
    UPDATE_TIME,
    WEEK_IS_ODD,
    UPDATE_DAY_INDEX
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

function weekIsOdd() {
    return {
        type: WEEK_IS_ODD
    }
}

function updateDayIndex(index) {
    return {
        type: UPDATE_DAY_INDEX,
        index
    }
}

export {updateTime, getDayIndex, weekIsOdd, updateDayIndex};
