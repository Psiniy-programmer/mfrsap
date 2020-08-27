import React, {Component} from "react";
import {Route} from 'react-router-dom'
import SearchPage from "./Components/SearchPage/SearchPage";
import Search from "./Components/SearchPage/Search/Search";
import DepartmentList from "./Components/SearchPage/DepartmentList/DepartmentList";
import {connect} from "react-redux";
import CourseList from "./Components/SearchPage/CourseList/CourseList";
import TittleApp from "./Components/TittleApp/TittleApp";

class RoutesGenerate extends Component {

    render() {
        return <>
            <Route exact path={`/`} render={() => {
                return <>
                    <SearchPage description={`Начните вводить группу, преподавателя или аудиторию`}/>
                    <Search/>
                </>
            }}
            />

            <Route exact path={`/:faculty`} render={(routerProps) => <>
                <SearchPage {...routerProps}/>
                <DepartmentList {...routerProps}/>
            </>}
            />

            <Route exact path={`/:faculty/:department`} render={(routerProps) => <>
                <SearchPage description={`Кафедра `} {...routerProps}/>
                <CourseList {...routerProps}/>
            </>}
            />

            <Route exact path={`/:faculty/:department/:course`} render={(routerProps) => <>

            </>}
            />
        </>
    }
}

const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems,
        links: state.linkData
    }
}

const mapDispatchToState = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToState)(RoutesGenerate);