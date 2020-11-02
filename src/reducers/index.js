import { combineReducers } from 'redux';
import groupsList from './groupsList.js';
import facultyList from './facultyList.js';
import teachersList from './teachersList.js';
import filterItems from './filterItems.js';
import auditoryList from './auditoryList.js';
import raspData from './raspData.js';
import theme from './theme.js';
import favoriteStorage from './favoriteStorage.js';

export default combineReducers({
    groupsList,
    facultyList,
    teachersList,
    auditoryList,
    raspData,
    filterItems,
    theme,
    favoriteStorage
});
