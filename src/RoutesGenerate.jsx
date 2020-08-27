import React, {Component} from "react";
import {Route} from 'react-router-dom'
import SearchPage from "./Components/SearchPage/SearchPage";
import Search from "./Components/SearchPage/Search/Search";
import DepartmentList from "./Components/SearchPage/DepartmentList/DepartmentList";
import {connect} from "react-redux";
import CourseList from "./Components/SearchPage/CourseList/CourseList";
import TittleApp from "./Components/TittleApp/TittleApp";

class RoutesGenerate extends Component {
    generateCourseListRoutes() {
        {}
    }

    render() {
        return <>
            <Route exact path={`/`} render={() => {
                return <>
                    <SearchPage description={`Начните вводить группу, преподавателя или аудиторию`}/>
                    <Search/>
                </>
            }}
            />

            <Route path={`/:faculty`} render={(routerProps) => <>
                <SearchPage {...routerProps}/>
                <DepartmentList facName={`К`} {...routerProps}/>
            </>}
            />

            {/*<Route exact path={`/facultyId=31`} render={() => <>*/}
            {/*    <SearchPage description={`Космический факультет`}/>*/}
            {/*    <DepartmentList facName={`К`}/>*/}
            {/*</>}*/}
            {/*/>*/}
            {/*<Route exact path={`/facultyId=32`} render={() => <>*/}
            {/*    <SearchPage description={`Лесной факультет`}/>*/}
            {/*    <DepartmentList facName={`ЛТ`}/>*/}
            {/*</>}*/}
            {/*/>*/}
            {/*<Route exact path={`/facultyId=33`} render={() => <>*/}
            {/*    <SearchPage description={`Аспирантура`}/>*/}
            {/*    <DepartmentList facName={'Аспирантура'}/>*/}
            {/*</>}*/}
            {/*/>*/}

            <Route path={`/facultyId=31/:department`} render={(routerProps) => <>
                <SearchPage description={`Кафедра `} {...routerProps}/>
                <CourseList {...routerProps}/>
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