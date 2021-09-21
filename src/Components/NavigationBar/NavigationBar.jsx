import React, {Component} from "react";
import settingsLogo from "./Icons/Settings-icon.svg";
import starLogo from "./Icons/Star-icon.svg";
import searchLogo from "./Icons/Search-icon.svg";
import settingsLogo_active from "./Icons/Settings-icon_active.svg";
import starLogo_active from "./Icons/Star-icon_actve.svg";
import searchLogo_active from "./Icons/Search-icon_active.svg";
import mapLogo from "./Icons/Map.svg";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./style.css";

class NavigationBar extends Component {
    render() {
        const {pathname} = this.props.location;
        return (
            <div className={"NavigationBar"}>
                <div className={"NavigationBar__wrapper"}>

                    <Link onClick={this.props.clearInput} to={`/`}>
            <span>
              <img
                  src={pathname === "/" ? searchLogo_active : searchLogo}
                  alt="searchLogo trouble"
                  title="Поиск"
              />
            </span>
                    </Link>
                    <Link to={`/favorites`}>
            <span>
              <img
                  src={pathname === "/favorites" ? starLogo_active : starLogo}
                  alt="starLogo trouble"
                  title="Избранное"
              />
            </span>
                    </Link>
                    <a
                        href="https://map.msfu.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
            <span>
              <img
                  src={mapLogo}
                  alt="starLogo trouble"
                  title="Интерактивная карта ГУК"
              />
            </span>
                    </a>
                    <Link to={`/settings`}>
            <span>
              <img
                  src={
                      pathname === "/settings" ? settingsLogo_active : settingsLogo
                  }
                  alt="settingsLogo trouble"
                  title="Настройки"
              />
            </span>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        clearInput: () => {
            dispatch({type: "CLEAR_INPUT"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
