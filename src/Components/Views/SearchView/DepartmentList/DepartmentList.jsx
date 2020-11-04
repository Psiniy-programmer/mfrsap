import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from "react-router-dom";
import {changeLangEngToRus, changeLangRusToEng, generateUniqKey} from "../../../../helpers/helpers";
import './style.css';
class DepartmentList extends Component {
    getFacultyList() {
        const { match, facultyList, groupsList } = this.props;
        let list = [],
            str = match.params.faculty,
            curID;
        str = changeLangEngToRus(str);
        // eslint-disable-next-line
        facultyList.data.map(item => {if (str === item.facultyname) return curID = item.facultyid})
        // eslint-disable-next-line
        groupsList.data.map(item => {
            str = '';
            if (item.facultyid === curID) {
                for (let symbol = 0; symbol < item.groupname.length; symbol++) {
                    if (item.groupname[symbol] !== '-') {
                        str += item.groupname[symbol];
                    } else break;
                }
            }
            if (!list.includes(str) && str.length !== 0) list.push(str);
        })
        return list.map((item, index) => {
            str = (changeLangRusToEng(item).toUpperCase());
            return (
                <Link key={generateUniqKey('depart_', index)} to={`${match.url}/${str}`}>
                    <MenuItem text={item} />
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