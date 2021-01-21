import React, {Component} from 'react';
import bmstu_logo from './icons/bmstu-logo.svg';
import {Link, Route} from "react-router-dom";
import NavigationBar from "../../NavigationBar/NavigationBar";
import {connect} from "react-redux";
import './style.css';
import Consts from "../../../helpers/consts"

class AppHeader extends Component {
    render() {
        const {windowSizes} = this.props;
        return <Link to="/" className={'AppHeader textColor'}>
            <div className={'SearchTittle'}>
                <img src={bmstu_logo} alt="error"/>
                <h1 className={'SearchTittle_text text-bold--header text-bold--large '}>Расписание МФ МГТУ</h1>
            </div>
            {windowSizes.width > Consts.DESKTOP_MIN_WIDTH ?
                <Route path={'/'} render={routerProps => <NavigationBar {...routerProps}/>}/> : <></>}
        </Link>

    }
}

const mapStateToProps = state => {
    return {
        windowSizes: state.windowSizes
    }
};

// Исползьуем наше actions для прокидывания данных в наш store //
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);