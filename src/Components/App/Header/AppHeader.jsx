import React, {Component} from 'react';
import bmstu_logo from './icons/bmstu-logo.svg';
import {Link, Route} from "react-router-dom";
import NavigationBar from "../../NavigationBar/NavigationBar";
import {connect} from "react-redux";
import Consts from "../../../helpers/consts"
import './style.css';

class AppHeader extends Component {
    render() {
        const {windowSizes} = this.props;
        return <header className={'AppHeader textColor'}>
            <div onClick={this.props.clearInput} className={'SearchTittle'}>
                <img src={bmstu_logo} alt="error"/>
                <Link className={'textColor SearchTittle_text'} to="/">
                    <h1 className={'text-bold--large'}>Расписание МФ МГТУ</h1>
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
