import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuItem from "../../Items/MenuItem/MenuItem";
import './style.css';
import {Link} from "react-router-dom";

class DepartmentList extends Component {
    getFacultyList() {
        const { links, match } = this.props;
        let list = [];
        let str;
        let curID;
        // Получаем id факультета
        this.props.facultyList.map(item => {
            if (this.props.facName === item.facultyname) curID = item.facultyid;
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
            return <>
                <Link onClick={() => {this.props.dispatchLink('department', str)}}
                      to={`/facultyId=${links.faculty}/${str}`}>
                    <MenuItem text={item}/>
                </Link></>
        })
    }
    // to={`/facultyId=${links.faculty}/department=${links.department}`}>
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