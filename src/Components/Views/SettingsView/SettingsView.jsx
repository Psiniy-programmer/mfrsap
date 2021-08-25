import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../MenuItem/MenuItem";
import { connect } from "react-redux";
import {
    DARK_THEME,
    LIGHT_THEME,
    SYSTEM_THEME
} from "../../../reducers/theme";
import "./style.css";

class SettingsView extends Component {
  render() {
    const { currentTheme } = this.props;
    let themeText = '';

    switch(currentTheme) {
        case LIGHT_THEME:
            themeText = 'светлая';
            break;
        case DARK_THEME:
            themeText = 'тёмная';
            break;
        case SYSTEM_THEME:
            themeText = 'как на устройстве';
            break;
        default:
            themeText = 'как на устройстве';
            break;
    }
    return (
      <div className="content_info">
        <h2 className={"text-bold--header textColor"}>Настройки</h2>
        <div className={"view__items"}>
          <Link to={"/settings/export"}>
            <MenuItem text={"Экспорт избранного"} />
          </Link>
          <Link to={"/settings/theme"}>
            <MenuItem text={`Тема: ${themeText}`} />
          </Link>
          <Link to={"/settings/manual"}>
            <MenuItem text={"Инструкция по установке из браузера"} />
          </Link>
          <Link to={"/settings/feedback"}>
            <MenuItem text={`Обратная связь`} />
          </Link>
          <Link to={"/settings/developers"}>
            <MenuItem text={"Информация о разработчиках"} />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTheme: state.theme,
  };
};

export default connect(mapStateToProps)(SettingsView);
