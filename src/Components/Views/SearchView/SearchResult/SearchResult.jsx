import React, {Component} from 'react';
import {connect} from "react-redux";
import SearchList from "../SearchList/SearchList";
import './style.css';

class SearchResult extends Component {
    render() {
        const {groupsList, teachersList, auditoryList} = this.props
        return (
            <div className={`SearchResult`}>
                <SearchList title={'Группы'} data={groupsList}/>
                <SearchList title={'Преподователи'} data={teachersList}/>
                <SearchList title={'Аудитории'} data={auditoryList}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems,
        groupsList: state.groupsList.data.map(groupElem => {
            if (groupElem.groupname.toLowerCase().includes(state.filterItems.toLowerCase())) return groupElem;
            else return null;
        }),
        // Динамический поиск по преподам //
        teachersList: state.teachersList.data.map(teacherElem => {
            if (teacherElem.teacher.toLowerCase().includes(state.filterItems.toLowerCase())) return teacherElem;
            else return null;
        }),
        // Динамический поиск по аудиториям //
        auditoryList: state.auditoryList.data.map(auditoryElem => {
            if (auditoryElem.aud.includes(state.filterItems)) return auditoryElem;
            else return null;
        })
    }
}

export default connect(mapStateToProps)(SearchResult);
