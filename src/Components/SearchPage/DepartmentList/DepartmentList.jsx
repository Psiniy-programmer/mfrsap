import React, {Component} from 'react';
import {connect} from "react-redux";
import SearchItem from "../SearchItem/SearchItem";
import {Link} from "react-router-dom";
import {changeLangEngToRus, changeLangRusToEng, generateUniqKey} from "../../../helpers/helpers";
import './style.css';

class DepartmentList extends Component {
    getFacultyList() {
        const { match } = this.props;
        let list = [];
        let str = '';
        let curID;
        // Кидаем в str название факультета
        for (let i = 1; i < match.url.length; i++) str += match.url[i];
        // переворачиваем в нужынй язык для поиска id факультета
        str = changeLangEngToRus(str);
        // Получаем id факультета
        // eslint-disable-next-line
        this.props.facultyList.map(item => {
            if (str === item.facultyname) curID = item.facultyid;
        })
        // Составляем список кафедр
        // eslint-disable-next-line
        this.props.groupsList.map(item => {
            str = '';
            if (item.facultyid === curID) {
                for (let symbol = 0; symbol < item.groupname.length; symbol++) {
                    if (item.groupname[symbol] !== '-') {
                        str += item.groupname[symbol];
                    } else break;
                }
            }
            // Если строки нету в списке на отрисовку, то кидаем ее туда
            if (!list.includes(str) && str.length !== 0) list.push(str);
        })
        // Возвращаем список на отрисовку
        return list.map((item, index) => {
            // выполняем обработку названий кафедр для закидывания их в адрес.строку
            str = changeLangRusToEng(item);
            return (
                <Link key={generateUniqKey('depart_', index)} to={`${match.url}/${str}`}>
                    <SearchItem text={item} />
                </Link>
            )
        })
    }

    render() {
        return (
            <div className={`DepartmentList`}>
                {this.getFacultyList()}
            </div>
        );
    }
}

// Прокидываем из нашего store нужные нам состояния //
const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        groupsList: state.groupsList,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);