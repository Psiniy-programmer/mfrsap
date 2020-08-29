import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import NavigationBar from "./NavigationBar/NavigationBar";

import { fetchGroupsData } from '../actions/groupsList.js';
import { fetchFacultyData } from '../actions/facultyList.js';
import { fetchTeachersData } from '../actions/teachersList.js';
import { fetchAuditoryData } from '../actions/auditoryList.js';
import RoutesGenerate from "../RoutesGenerate";

class App extends Component {

    componentDidMount() {
        this.props.fetchDataGroups('https://mf.bmstu.ru/rasp/test/?type=0');
        this.props.fetchFacultyData('https://mf.bmstu.ru/rasp/test/?type=6');
        this.props.fetchTeachersData('https://mf.bmstu.ru/rasp/test/?type=2');
        this.props.fetchAuditoryData('https://mf.bmstu.ru/rasp/test/?type=4');
    }

    render() {
        return <>
            <RoutesGenerate/>
            <NavigationBar/>
        </>
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