import React, {Component} from 'react';
import {connect} from "react-redux";
import SearchList from "../SearchList/SearchList";

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
            let counter = 0;
            for (let i = 0; i < state.filterItems.length; i++) {
                if (groupElem.groupname[i] === state.filterItems[i].toUpperCase()) {
                    counter++;
                } else if (state.filterItems[i] === ' ' && groupElem.groupname[i] === '-') {
                    counter++;
                }
            }
            return counter === state.filterItems.length ? groupElem : undefined;
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

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
