import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeLangEngToRus} from "../../../helpers/helpers";
import SearchItem from "../SearchItem/SearchItem";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './style.css';

class GroupsList extends Component {
    getRaspList() {
        const { match, groupsList } = this.props;
        let courseNumber;
        let semNumber;
        let department;
        let tempList = []; // Временный массив в который закинем группы по совпадению с названием кафдеры
        let resultArr = [];
        let tempStr; // Понадобится для выборки кафедр по названию
        let link;
        switch (match.params.course) {
            case 'I' : courseNumber = 1; break;
            case 'II' : courseNumber = 2; break;
            case 'III' : courseNumber = 3; break;
            case 'IV' : courseNumber = 4; break;
            case 'V' : courseNumber = 5; break;
            case 'VI' : courseNumber = 1; break;
            case 'VII' : courseNumber = 2; break;
            default : break;
        }
        // находим нужные нам группы по кафедре
        department = changeLangEngToRus(match.params.department);
        // eslint-disable-next-line
        groupsList.data.map(item => {
            tempStr = '';
            // получаем название кафедры из списка групп
            for (let i = 0; i < item.groupname.length; i++) {
                if (item.groupname[i] !== '-') {
                    tempStr += item.groupname[i];
                } else break;
            }
            if (tempStr === department) tempList.push(item);
        })
        // находим нужные нам группы по семестру
        // eslint-disable-next-line 
        tempList.map(item => {
            link = `${match.url}/groupid=${item.groupid}`;
            // Получаем цифру семестра у группы
            semNumber = item.groupname.match(/\d+/g)[1];
            // Поиск для 5 курса
            if (courseNumber === 5) {
                if ((Number(semNumber[0] + semNumber[1]) === courseNumber * 2) || (Number(semNumber[0] + semNumber[1]) === courseNumber * 2 -1)) {
                    resultArr.push(<Link key={Date.now() + item.groupid} className={`Link`} to={link}>
                        <SearchItem text={item.groupname}/>
                    </Link>)
                } // Поиск для остальных курсов
            } else {
                // Поиск для магистратуры
                if (match.params.course === 'VI' || match.params.course === 'VII') {
                    if (((Number(semNumber[0]) === courseNumber * 2) || (Number(semNumber[0]) === courseNumber * 2 - 1)) && (item.groupname[item.groupname.length-1]) === 'М') {
                        resultArr.push(<Link key={Date.now() + item.groupid} className={`Link`} to={link}>
                            <SearchItem text={item.groupname}/>
                        </Link>)
                    }
                } else { // поиск для бакалавров
                    if (((Number(semNumber[0]) === courseNumber * 2) || (Number(semNumber[0]) === courseNumber * 2 - 1)) && ((item.groupname[item.groupname.length-1]) !== 'М')) {
                        resultArr.push(<Link key={Date.now() + item.groupid} className={`Link`} to={link}>
                            <SearchItem text={item.groupname}/>
                        </Link>)
                    }
                }
            }
        })
        return resultArr;
    }

    render() {
        return (
            <div className={`RaspList`}>
                {this.getRaspList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        groupsList: state.groupsList
    }
}

const mapDispatchToState = dispatch => {
    return {}
}

GroupsList.propTypes = {
    groupsList: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToState)(GroupsList)