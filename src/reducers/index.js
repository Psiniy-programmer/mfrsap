import {combineReducers} from "redux";
import groupsList from "./groupsList.js";
import facultyList from "./facultyList.js";
import teachersList from "./teachersList.js";
import filterItems from "./filterItems.js";
import auditoryList from "./auditoryList.js";
import raspData from "./raspData.js";
import theme from "./theme.js";
import favoriteStorage from "./favoriteStorage.js";
import windowSizes from "./windowSizes.js";
import appTimer from "./appTimer.js";
import notification from "./notification.js";
import altList from "./altList.js";
import newGroupsList from "./newGroupsList.js";

export default combineReducers({
    groupsList,
    facultyList,
    teachersList,
    auditoryList,
    raspData,
    filterItems,
    theme,
    favoriteStorage,
    windowSizes,
    appTimer,
    notification,
    altList,
    newGroupsList,
});
