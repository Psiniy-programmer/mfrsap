import React, {Component} from 'react';
import settingsLogo from './Icons/Settings-icon.svg';
import starLogo from './Icons/Star-icon.svg';
import searchLogo from './Icons/Search-icon.svg';
import './style.css';
import {Link} from "react-router-dom";

class NavigationBar extends Component {
    render() {
        return (
            <div className={'NavigationBar'}>
                <Link to={`/`}>
                    <span><img src={searchLogo} alt="searchLogo trouble"/></span>
                </Link>
                <Link to={`/favorites`}>
                    <span><img src={starLogo} alt="starLogo trouble"/></span>
                </Link>
                <Link to={`/settings`}>
                    <span><img src={settingsLogo} alt="settingsLogo trouble"/></span>
                </Link>
            </div>
        );
    }
}

export default NavigationBar;