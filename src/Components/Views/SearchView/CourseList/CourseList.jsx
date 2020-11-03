import React, {Component} from 'react';
import './style.css'
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from "react-router-dom";

class CourseList extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className={'CourseList'}>
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

export default CourseList