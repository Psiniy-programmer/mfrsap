import React, {Component} from 'react';
import './style.css'
import {connect} from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from "react-router-dom";
import {finderIsEmpty} from "../../../../helpers/helpers";

class CourseList extends Component {
    render() {
        const { match, findInput } = this.props;
        return (
            <div className={`CourseList ${finderIsEmpty(findInput) ? 'CourseListHide' : ''}`}>
                <Link className={`Link`} to={`${match.url}/I`}><MenuItem text={'I курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/II`}><MenuItem text={'II курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/III`}><MenuItem text={'III курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/IV`}><MenuItem text={'IV курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/V`}><MenuItem text={'V курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/VI`}><MenuItem text={'I курс магистратура'}/></Link>
                <Link className={`Link`} to={`${match.url}/VII`}><MenuItem text={'I курс магистратура'}/></Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        findInput: state.filterItems
    }
};

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)