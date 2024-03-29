import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeLangEngToRus, finderIsEmpty} from "../../../../helpers/helpers";
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from "react-router-dom";
import './style.css';

class GroupsList extends Component {
    getRaspList() {
        const {match, groupsList} = this.props;
        let courseNumber,
            semNumber,
            department,
            tempList = [], // Временный массив в который закинем группы по совпадению с названием кафдеры
            resultArr = [],
            tempStr, // Понадобится для выборки кафедр по названию
            link;
        switch (match.params.course) {
            case 'I' :
                courseNumber = 1;
                break;
            case 'II' :
                courseNumber = 2;
                break;
            case 'III' :
                courseNumber = 3;
                break;
            case 'IV' :
                courseNumber = 4;
                break;
            case 'V' :
                courseNumber = 5;
                break;
            case 'VI' :
                courseNumber = 1;
                break;
            case 'VII' :
                courseNumber = 2;
                break;
            default :
                break;
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
                if ((Number(semNumber[0] + semNumber[1]) === courseNumber * 2)
                    || (Number(semNumber[0] + semNumber[1]) === courseNumber * 2 - 1)) {
                    resultArr.push(<Link key={Date.now() + item.groupid} className={`Link`} to={link}>
                        <MenuItem text={item.groupname}/>
                    </Link>)
                } // Поиск для остальных курсов
            } else {
                // Поиск для магистратуры
                if (match.params.course === 'VI' || match.params.course === 'VII') {
                    if (((Number(semNumber[0]) === courseNumber * 2) || (Number(semNumber[0]) === courseNumber * 2 - 1))
                        && (item.groupname[item.groupname.length - 1]) === 'М') {
                        resultArr.push(<Link key={Date.now() + item.groupid} className={`Link`} to={link}>
                            <MenuItem text={item.groupname}/>
                        </Link>)
                    }
                } else { // поиск для бакалавров
                    if (((Number(semNumber[0]) === courseNumber * 2) || (Number(semNumber[0]) === courseNumber * 2 - 1))
                        && ((item.groupname[item.groupname.length - 1]) !== 'М')) {
                        resultArr.push(<Link key={Date.now() + item.groupid} className={`Link`} to={link}>
                            <MenuItem text={item.groupname}/>
                        </Link>)
                    }
                }
            }
        })
        return resultArr;
    }

    render() {
        return (
            <div className={`GroupsList ${finderIsEmpty(this.props.findInput) ? 'GroupsList__hide' : ''}`}>
                {this.getRaspList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        findInput: state.filterItems,
        groupsList: state.groupsList
    }
}

export default connect(mapStateToProps)(GroupsList);
