import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.css'
import SearchList from "./SearchList/SearchList";
import {changeLangRusToEng, generateUniqKey} from "../../../helpers/helpers";

class SearchView extends Component {

    getView() {
        const {findInput, groupsList, teachersList, auditoryList, facultyList} = this.props;
        const facList = []
        if (findInput.length === 0) {
            facultyList.data.map((item, index) => {
                let fac = <Link key={generateUniqKey('facultyItem', index)}
                                to={`/search/${changeLangRusToEng(item.facultyname)}`}>
                    <span className={'raspTextColor'}>
                        {item.facultyname}
                    </span>
                </Link>
                facList.push(fac)
            })
            return <>
                <p className={'SearchHelper text-regular--medium textColor'}>
                    Или выберите группу из списка
                </p>
                <div className={'SearchButtons'}>
                    {facList}
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
