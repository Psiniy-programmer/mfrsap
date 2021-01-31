import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import {fetchGroupsData} from '../../actions/groupsList.js';
import {fetchFacultyData} from '../../actions/facultyList.js';
import {fetchTeachersData} from '../../actions/teachersList.js';
import {fetchAuditoryData} from '../../actions/auditoryList.js';
import {Route} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import AppHeader from "./Header/AppHeader";
import Search from "../Views/SearchView/SearchView";
import SearchRoutes from "../Routes/SearchRoutes";
import SettingsRoutes from "../Routes/SettignsRoutes";
import FavoritesRoutes from "../Routes/FavoritesRoutes";
import {removeClasses} from "../../helpers/helpers";
import {addToFavorite} from "../../actions/favoriteStorage";
import Rasp from "../Views/RaspView/Rasp";
import Loader from "../Loader/Loader";
import {resizeWindow} from "../../actions/resizeWindow";
import Footer from "./Footer/Footer";
import Base from "./Base/Base";
import Consts from "../../helpers/consts"
import HomeRoutes from "../Routes/HomeRoutes";

class App extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.props.resizeWindow)
        this.props.fetchDataGroups('https://mf.bmstu.ru/rasp/api/group/list');
        this.props.fetchFacultyData('https://mf.bmstu.ru/rasp/api/faculty/list');
        this.props.fetchTeachersData('https://mf.bmstu.ru/rasp/api/teacher/list');
        this.props.fetchAuditoryData('https://mf.bmstu.ru/rasp/api/aud/list');
        this.syncStorages();
        this.getThemeClass()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.resizeWindow);
    }

    syncStorages() {
        for (let i = 0; i < localStorage.length; i++) {
            let info = {
                name: localStorage.key(i),
                type: localStorage.getItem(localStorage.key(i))
            }
            this.props.addToFavorite(info)
        }
    }

    getThemeClass() {
        const root = document.getElementById('body');
        removeClasses(root);
        root.classList.add(this.props.currentTheme);
    }

    infoIsFetched() {
        const {groupsList, facultyList, teachersList, auditoryList} = this.props
        if (groupsList.loading !== false) return false
        if (facultyList.loading !== false) return false
        if (teachersList.loading !== false) return false
        return auditoryList.loading === false
    }

    render() {
        const {windowSizes} = this.props

        if (this.infoIsFetched()) {
            return <div className={`App`}>
                <div className="content">
                    <Route exact path={'/'} render={routerProps => <HomeRoutes {...routerProps}/>}/>
                    <Route path={'/search'} render={routerProps => <SearchRoutes {...routerProps}/>}/>
                    <Route exact path={'/list/:rasp'} render={routerProps => <Rasp {...routerProps}/>}/>
                    <FavoritesRoutes/>
                    <SettingsRoutes/>
                </div>
                {windowSizes.width < Consts.DESKTOP_MIN_WIDTH ?
                    <Route path={'/'} render={routerProps => <NavigationBar {...routerProps}/>}/> : <></>}
                <Footer/>
            </div>
        } else return <Loader/>
    }
}

// Прокидываем из нашего store нужные нам состояния //
const mapStateToProps = state => {
    return {
        currentTheme: state.theme,
        groupsList: state.groupsList,
        facultyList: state.facultyList,
        teachersList: state.teachersList,
        auditoryList: state.auditoryList,
        windowSizes: state.windowSizes
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
        },
        addToFavorite: item => {
            dispatch(addToFavorite(item))
        },
        resizeWindow: () => {
            dispatch(resizeWindow())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);