import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.css'
import {changeLangRusToEng, finderIsEmpty, generateUniqKey} from "../../../helpers/helpers";

class SearchView extends Component {

    getView() {
        const {facultyList} = this.props;
        const facList = []


        facultyList.data.map((item, index) => {
            let fac = <Link
                key={generateUniqKey('facultyItem', index)}
                to={`/search/${changeLangRusToEng(item.facultyname)}`}
            >
                    <span className={'raspTextColor'}>
                        {item.facultyname}
                    </span>
            </Link>
            facList.push(fac)
        })

        return <>
            <p className={`SearchHelper text-regular--medium textColor`}>
                Или выберите группу из списка
            </p>
            <div className={'SearchButtons'}>
                {facList}
            </div>
        </>

    }

    render() {
        return (
            <div className={`Search ${finderIsEmpty(this.props.findInput) ? 'SearchHide' : ''}`}>
                {this.getView()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
