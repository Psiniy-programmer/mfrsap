import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.css'
import SearchList from "./SearchList/SearchList";

class SearchView extends Component {

    getView() {
        const {groupsList, teachersList, auditoryList} = this.props;
        if (this.props.findInput.length === 0) {
            return <>
                <p className={'SearchHelper text-regular--medium textColor'}>
                    Или выберите группу из списка
                </p>
                <div className={'SearchButtons'}>
                    <Link to={`/search/K`}>
                        <span className={'raspTextColor'}>К</span>
                    </Link>
                    <Link to={`/search/LT`}>
                        <span className={'raspTextColor'}>ЛТ</span>
                    </Link>
                    <Link to={`/search/Aspirant`}>
                        <span className={'raspTextColor'}>Аспирантура</span>
                    </Link>
                </div>
            </>
        } else {
            return <div className={'Search__result'}>
                <SearchList title={'Группы'} data={groupsList}/>
                <SearchList title={'Преподователи'} data={teachersList}/>
                <SearchList title={'Аудитории'} data={auditoryList}/>
            </div>
        }
    }

    render() {
        return (
            <div className={'Search'}>
                {this.getView()}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
