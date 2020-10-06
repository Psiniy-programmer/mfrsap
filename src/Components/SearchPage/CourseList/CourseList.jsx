import React, {Component} from 'react';
import './style.css'
import SearchItem from "../SearchItem/SearchItem";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class CourseList extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className={'CourseList'}>
                <Link className={`Link`} to={`${match.url}/I`}><SearchItem text={'I курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/II`}><SearchItem text={'II курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/III`}><SearchItem text={'III курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/IV`}><SearchItem text={'IV курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/V`}><SearchItem text={'V курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/VI`}><SearchItem text={'I курс магистратура'}/></Link>
                <Link className={`Link`} to={`${match.url}/VII`}><SearchItem text={'I курс магистратура'}/></Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems,
        links: state.linkData
    }
}

const mapDispatchToState = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToState)(CourseList)