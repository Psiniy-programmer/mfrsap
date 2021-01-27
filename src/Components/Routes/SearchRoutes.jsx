import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import DepartmentList from "../Views/SearchView/DepartmentList/DepartmentList";
import CourseList from "../Views/SearchView/CourseList/CourseList";
import RaspList from "../Views/SearchView/GroupsList/GroupsList";
import RaspItem from "../Views/RaspView/Rasp";
import Base from "../App/Base/Base";

class SearchRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/search/:faculty`} render={routerProps => <>
                    <div className="content_info">
                        <Base {...routerProps}/>
                        <DepartmentList {...routerProps}/>
                    </div>
                </>}
                />
                <Route exact path={`/search/:faculty/:department`} render={routerProps => <>
                    <div className="content_info">
                        <Base {...routerProps}/>
                        <CourseList {...routerProps}/>
                    </div>
                </>}
                />
                <Route exact path={`/search/:faculty/:department/:course`} render={routerProps => <>
                    <div className="content_info">
                        <Base {...routerProps}/>
                        <RaspList {...routerProps}/>
                    </div>
                </>}
                />
                <Route exact path={`/search/:faculty/:department/:course/:rasp`} render={routerProps => <RaspItem {...routerProps}/>}/>
            </Switch>
        );
    }
}

export default SearchRoutes;