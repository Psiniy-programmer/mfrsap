import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from "react-router-dom";
import {changeLangEngToRus, changeLangRusToEng, finderIsEmpty, generateUniqKey} from "../../../../helpers/helpers";
import './style.css';

class DepartmentList extends Component {
    setFacList() {
        const {facultyList, altList, match} = this.props;

        const curFac = changeLangEngToRus(match.params.faculty);
        let resList = new Set();
        let curID = 0;

        facultyList.data.map(item => {
            if (curFac === item.facultyname) return curID = item.facultyid;
            return null;
        })

        for (let types in altList.data) {
            for (let form in altList.data[types]) {
                // eslint-disable-next-line
                altList.data[types][form].map((item) => {
                    if (item.facultyid === curID) {
                        let split = item.groupname.split('-')[0];
                        resList.add(split);
                    }
                    return null;
                });

            }
        }

        resList = [...resList].sort((a,b) => {
            return (parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/)));
        })

        return resList.map((item, index) => {
            let str = changeLangRusToEng(item).toUpperCase();

            return (
                <Link key={generateUniqKey('depart_', index)} to={`${match.url}/${str}`}>
                    <MenuItem text={item}/>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className={`DepartmentList ${finderIsEmpty(this.props.findInput) ? 'DepartmentList__hide' : null}`}>
                {this.setFacList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        altList: state.altList,
        findInput: state.filterItems,
        facultyList: state.facultyList
    }
};

export default connect(mapStateToProps)(DepartmentList);
