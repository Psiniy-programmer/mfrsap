import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import { fetchGroupsData } from '../../actions/groupsList.js';
import { fetchFacultyData } from '../../actions/facultyList.js';
import { fetchTeachersData } from '../../actions/teachersList.js';
import { fetchAuditoryData } from '../../actions/auditoryList.js';
import {Route} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchPage from "./Header/AppHeader";
import Search from "../Views/SearchView/SearchView";
import SearchRoutes from "../Routes/SearchRoutes";
import SettignsRoutes from "../Routes/SettignsRoutes";
import FavoritesRoutes from "../Routes/FavoritesRoutes";

class App extends Component {

    componentDidMount() {
        this.props.fetchDataGroups('https://mf.bmstu.ru/rasp/test/?type=0');
        this.props.fetchFacultyData('https://mf.bmstu.ru/rasp/test/?type=6');
        this.props.fetchTeachersData('https://mf.bmstu.ru/rasp/test/?type=2');
        this.props.fetchAuditoryData('https://mf.bmstu.ru/rasp/test/?type=4');
    }

    render() {
        return <div className={'App'}>
            <div className="content">
                <Route exact path={`/`} render={routerProps => <>
                    <SearchPage {...routerProps} description={`Начните вводить группу, преподавателя или аудиторию`}/>
                    <Search/>
                </>}/>
                <Route path={'/search'} render={routerProps => <SearchRoutes {...routerProps}/>}/>
                <SettignsRoutes/>
                <FavoritesRoutes/>
            </div>
            <Route path={'/'} render={routerProps => <NavigationBar {...routerProps}/>}/>
        </div>
    }
}

// Прокидываем из нашего store нужные нам состояния //
const mapStateToProps = state => {
    return {
        groupsList: state.groupsList,
        facultyList: state.facultyList,
        teachersList: state.teachersList,
        auditoryList: state.auditoryList
    }
};

// Исползьуем наше actions для прокидывания данных в наш store //
const mapDispatchToProps = dispatch => {
    return {
        fetchFacultyData: url => {
            dispatch(fetchFacultyData(url))
        },
        fetchDataGroups: url => {
            dispatch(fetchGroupsData(url))
        },
        fetchTeachersData: url => {
            dispatch(fetchTeachersData(url))
        },
        fetchAuditoryData: url => {
            dispatch(fetchAuditoryData(url))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);