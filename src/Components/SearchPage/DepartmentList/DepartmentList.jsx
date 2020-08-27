import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuItem from "../../Items/MenuItem/MenuItem";
import {Link} from "react-router-dom";
import {changeLangEngToRus} from "../../../helpers/helpers";
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
        this.props.facultyList.map(item => {
            if (str === item.facultyname) curID = item.facultyid;
        })
        // Составляем список кафедр
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
            if (!list.includes(str) && str.length !== 0) list.push(str)
        })
        // Возвращаем список на отрисовку
        return list.map(item => {
            // выполняем обработку названий кафедр для закидывания их в адрес.строку
            switch (item[0]) {
                case 'К' : str = 'k'; break;
                case 'Л' : str = 'lt'; break;
                case 'А' : str = 'aspirant'; break;
                default : break;
            }
            str += item.match(/\d+/g)[0];
            console.log('test');
            return <>
                <Link onClick={() => {this.props.dispatchLink('department', str)}}
                      to={`${match.url}/${str}`}>
                    <MenuItem text={item}/>
                </Link></>
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
        links: state.linkData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchLink: (name, link) => {
            dispatch({type: 'ADD_LINK', name: name, payload: link})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);