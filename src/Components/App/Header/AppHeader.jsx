import React, {Component} from 'react';
import bmstu_logo from './icons/bmstu-logo.svg';
import {Link, Route} from "react-router-dom";
import NavigationBar from "../../NavigationBar/NavigationBar";
import {connect} from "react-redux";
import Consts from "../../../helpers/consts"
import './style.css';
import DateWeek from '../../DateWeek/DateWeek';

class AppHeader extends Component {
    render() {
        const {windowSizes} = this.props;
        return <header className={'AppHeader textColor'}>
            <div onClick={this.props.clearInput} className={'SearchTittle'}>
                <Link className={'SearchTittle_link'} to="/">
                    <img src={bmstu_logo} alt="МФ МГТУ"/>
                    <div className={'textColor SearchTittle_text'} >
                        <h1 className={'SearchTittle__title text-bold--large'}>Расписание МФ МГТУ</h1>
                        <div className='SearchTittle__date text-regular--small'>
                            <DateWeek showWeek showOdd />
                        </div>
                    </div>
                </Link>
            </div>
            {windowSizes.width > Consts.DESKTOP_MIN_WIDTH ?
                <Route path={'/'} render={routerProps => <NavigationBar {...routerProps}/>}/> : null}
        </header>

    }
}

const mapStateToProps = state => {
    return {
        windowSizes: state.windowSizes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearInput: () => {
            dispatch({type: "CLEAR_INPUT"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
