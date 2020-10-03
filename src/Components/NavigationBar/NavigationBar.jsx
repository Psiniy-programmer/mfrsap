import React, {Component} from 'react';
import settingsLogo from './Icons/Settings-icon.svg';
import starLogo from './Icons/Star-icon.svg';
import searchLogo from './Icons/Search-icon.svg';
import settingsLogo_active from './Icons/Settings-icon_active.svg';
import starLogo_active from './Icons/Star-icon_actve.svg';
import searchLogo_active from './Icons/Search-icon_active.svg';
import './style.css';
import {Link} from "react-router-dom";

class NavigationBar extends Component {
    render() {
        const {url} = this.props.match;
        return (
            <div className={'NavigationBar'}>
                <Link to={`/`}>
                    <span {...this.props}>
                        <img
                            src={url === '/' ? searchLogo_active : searchLogo}
                            alt="searchLogo trouble"
                        />
                    </span>
                </Link>
                <Link to={`/favorites`}>
                    <span {...this.props}>
                        <img
                            src={url === '/favorites' ? starLogo_active : starLogo}
                            alt="starLogo trouble"
                        />
                    </span>
                </Link>
                <Link to={`/settings`}>
                    <span {...this.props}>
                        <img
                            src={url === '/settings' ? settingsLogo_active : settingsLogo}
                            alt="settingsLogo trouble"
                        />
                    </span>
                </Link>
            </div>
        );
    }
}

export default NavigationBar;