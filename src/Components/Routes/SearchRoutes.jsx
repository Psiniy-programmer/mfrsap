import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SearchPage from "../SearchPage/SearchPage";
import DepartmentList from "../SearchPage/DepartmentList/DepartmentList";
import CourseList from "../SearchPage/CourseList/CourseList";
import RaspList from "../SearchPage/GroupsList/GroupsList";
import RaspItem from "../Rasp/Rasp";

class Search extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/search/:faculty`} render={(routerProps) => <>
                    <SearchPage {...routerProps}/>
                    <DepartmentList {...routerProps}/>
                </>}
                />
                <Route exact path={`/search/:faculty/:department`} render={(routerProps) => <>
                    <SearchPage {...routerProps}/>
                    <CourseList {...routerProps}/>
                </>}
                />
                <Route exact path={`/search/:faculty/:department/:course`} render={(routerProps) => <>
                    <SearchPage {...routerProps}/>
                    <RaspList {...routerProps}/>
                </>}
                />
                <Route exact path={`/search/:faculty/:department/:course/:rasp`} render={(routerProps) => <>
                    <RaspItem {...routerProps}/>
                </>}
                />
            </Switch>
        );
    }
}

export default Search;