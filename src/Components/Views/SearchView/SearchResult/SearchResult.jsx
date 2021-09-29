import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchList from '../SearchList/SearchList';
import './style.css';
import {searchByInclude, sortBySymbols} from "../../../../helpers/helpers";

class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: false,
            teachers: false,
            auds: false
        };

    }

    render() {
        const {groupsList, teachersList, auditoryList} = this.props;

        return (
            <div className={`SearchResult`}>
                <SearchList title={'Группы'} data={groupsList}/>
                <SearchList title={'Преподаватели'} data={teachersList}/>
                <SearchList title={'Аудитории'} data={auditoryList}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems,
        groupsList: Object.keys(state.altList.data).map((key) => {
            return Object.keys(state.altList.data[key]).map((keyz) => {
                return state.altList.data[key][keyz]
                    .filter((group) => searchByInclude(group.groupname, state.filterItems));
            });
        }),
        // Динамический поиск по преподам //
        teachersList: sortBySymbols(
            state.teachersList.data
                .filter(teacherElem => searchByInclude(teacherElem.full_name, state.filterItems)),
            state.filterItems,
            'full_name'
        ),
        // Динамический поиск по аудиториям //
        auditoryList: sortBySymbols(
            state.auditoryList.data
                .filter(auditoryElem => searchByInclude(auditoryElem.aud, state.filterItems)),
            state.filterItems,
            'aud'),
    };
};

export default connect(mapStateToProps)(SearchResult);
