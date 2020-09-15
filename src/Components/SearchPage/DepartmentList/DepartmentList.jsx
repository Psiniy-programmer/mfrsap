import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuItem from "../../Items/MenuItem/MenuItem";
import {Link} from "react-router-dom";
import {changeLangEngToRus, changeLangRusToEng, generateUniqKey} from "../../../helpers/helpers";
import './style.css';

class DepartmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {renderList: []}
    }

    componentDidMount() {
        // this.setState({renderList: this.getFacultyList()})
        this.setState({renderList: [<>1</>,<>2</>]})
    }

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
                    <MenuItem text={item} />
                </Link>
            )
        })
    }

    test() {
        let res = [];
        for (let i = 0; i < 10; i++) {
            res.push(
                <Link key={`depart_${new Date().getTime() + i}`} to={'d'}>
                    <MenuItem text={i}/>
                </Link>
            )
        }
        return res;
    }

    render() {
        return (
            <div className={`DepartmentList`}>
                {/*{this.test()}*/}
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