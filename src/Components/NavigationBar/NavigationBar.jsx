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
    constructor(props) {
        super(props);

        this.state = {
            searchBtn: true,
            starBtn: false,
            settingsBtn: false
        }
    }

    handleClick(tittle) {
        for (let key in this.state) {
            if (key === tittle) this.setState({[key] : true})
            else this.setState({[key]: false})
        }
    }

    render() {
        return (
            <div className={'NavigationBar'}>
                <Link onClick={this.handleClick.bind(this, 'searchBtn')}
                      to={`/`}>
                    <span {...this.props}>
                        <img
                            src={this.state.searchBtn ? searchLogo_active : searchLogo}
                            alt="searchLogo trouble"
                        />
                    </span>
                </Link>
                <Link onClick={this.handleClick.bind(this, 'starBtn')}
                      to={`/favorites`}>
                    <span {...this.props}>
                        <img
                            src={this.state.starBtn ? starLogo_active : starLogo}
                            alt="starLogo trouble"
                        />
                    </span>
                </Link>
                <Link onClick={this.handleClick.bind(this, 'settingsBtn')}
                      to={`/settings`}>
                    <span {...this.props}>
                        <img
                            src={this.state.settingsBtn ? settingsLogo_active : settingsLogo}
                            alt="settingsLogo trouble"
                        />
                    </span>
                </Link>
            </div>
        );
    }
}

export default NavigationBar;