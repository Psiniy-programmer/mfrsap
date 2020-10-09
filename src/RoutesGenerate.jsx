import React, {Component} from "react";
import {Route} from 'react-router-dom'
import SearchPage from "./Components/SearchPage/SearchPage";
import Search from "./Components/SearchPage/Search/Search";
import DepartmentList from "./Components/SearchPage/DepartmentList/DepartmentList";
import {connect} from "react-redux";
import CourseList from "./Components/SearchPage/CourseList/CourseList";
import RaspList from "./Components/SearchPage/GroupsList/GroupsList";
import RaspItem from "./Components/Rasp/Rasp";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

class RoutesGenerate extends Component {
    render() {
        return <>
            <Route path={'/'} render={(routerProps) => <>
                <NavigationBar {...routerProps}/>
            </>}/>
            <Route exact path={`/`} render={(routerProps) => {
                return <>
                    <SearchPage {...routerProps} description={`Начните вводить группу, преподавателя или аудиторию`}/>
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
                <SearchPage {...routerProps}/>
                <CourseList {...routerProps}/>
            </>}
            />

            <Route exact path={`/:faculty/:department/:course`} render={(routerProps) => <>
                <SearchPage {...routerProps}/>
                <RaspList {...routerProps}/>
            </>}
            />

            <Route exact path={`/:faculty/:department/:course/:rasp`} render={(routerProps) => <>
                <RaspItem {...routerProps}/>
            </>}
            />
        </>
    }
}

const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems
    }
}

const mapDispatchToState = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToState)(RoutesGenerate);