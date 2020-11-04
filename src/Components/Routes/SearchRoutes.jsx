import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SearchPage from "../App/Header/AppHeader";
import DepartmentList from "../Views/SearchView/DepartmentList/DepartmentList";
import CourseList from "../Views/SearchView/CourseList/CourseList";
import RaspList from "../Views/SearchView/GroupsList/GroupsList";
import RaspItem from "../Views/RaspView/Rasp";
import KekComponent from "../KekComponent/KekComponent";

class SearchRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/search/:faculty`} render={routerProps => <>
                    <SearchPage {...routerProps}/>
                    <DepartmentList {...routerProps}/>
                </>}
                />
                <Route exact path={`/search/:faculty/:department`} render={routerProps => <>
                    <SearchPage {...routerProps}/>
                    <CourseList {...routerProps}/>
                </>}
                />
                <Route exact path={`/search/:faculty/:department/:course`} render={routerProps => <>
                    <SearchPage {...routerProps}/>
                    <RaspList {...routerProps}/>
                </>}
                />
                <Route exact path={`/search/:faculty/:department/:course/:rasp`} render={routerProps => <RaspItem {...routerProps}/>}/>
            </Switch>
        );
    }
}

export default SearchRoutes;