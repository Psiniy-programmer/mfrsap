import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from "react-router-dom";
import {changeLangEngToRus, changeLangRusToEng, finderIsEmpty, generateUniqKey} from "../../../../helpers/helpers";
import './style.css';

class DepartmentList extends Component {
    setFacList() {
        const {facultyList, groupsList, match} = this.props;
        const curFac = changeLangEngToRus(match.params.faculty);
        const resList = new Set();
        let curID;

        facultyList.data.map(item => {
            if (curFac === item.facultyname) return curID = item.facultyid;
            return null;
        })

        for (let group in groupsList.data) {

            if (groupsList.data[group].facultyid === curID) {
                let split = group.split('-')[0];
                resList.add(split);
            }
        }

        return [...resList].map((item, index) => {
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
                {/*{this.getFacultyList()}*/}
                {this.setFacList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        findInput: state.filterItems,
        facultyList: state.facultyList,
        groupsList: state.groupsList,
    }
};

export default connect(mapStateToProps)(DepartmentList);
