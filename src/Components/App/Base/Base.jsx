import React, { Component } from "react";
import {
  changeLangEngToRus,
  finderIsEmpty,
  findFacultyName,
} from "../../../helpers/helpers";
import { connect } from "react-redux";
import SearchInput from "../../SearchInput/SearchInput";
import SearchResult from "../../Views/SearchView/SearchResult/SearchResult";
import Consts from "../../../helpers/consts";
import Notification from "./Notification/Notification";
import arrow from "./arrow.svg";
import "./style.css";
import consts from "../../../helpers/consts";

class Base extends Component {
  // Динамичное подставление нужного описания (текст под заголовком)
  dynamicDescription() {
    const { match } = this.props; // деструктурируем для удобства
    // Генерим описания к шапке
    switch (match.path) {
      case "/search/:faculty":
        return findFacultyName(match.params.faculty);
      case "/search/:faculty/:department":
        return "Кафедра " + changeLangEngToRus(match.params.department);
      case "/search/:faculty/:department/:course/:suffix":
        return `Кафедра ${changeLangEngToRus(match.params.department)} — ${
          match.params.course
        } курс`;
      case "/settings":
        return "Настройки";
      case "/favorites":
        return "Избранное";
      default:
        break;
    }
  }

  getDescription(getSearch = true) {
    const { match, findInput } = this.props;

    if (!match.path.includes("/settings") && match.path !== "/favorites") {
      return (
        <>
          {getSearch ? this.getSearch() : null}
          <div
            className={`SearchDescription ${
              finderIsEmpty(findInput) ? "SearchDescription__hide" : null
            } textColor`}
          >
            <p className={"SearchDescription__text  text-regular--medium "}>
              {this.dynamicDescription()}
            </p>
            <div
              onClick={() => window.history.back()}
              className={"SearchDescription__backtrace text-regular--medium"}
            >
              <img src={arrow} alt="<" />
              <p>Назад</p>
            </div>
          </div>
        </>
      );
    }
  }

  getSearch() {
    const isMobile = this.props.windowSizes.width > consts.DESKTOP_MIN_WIDTH;

    return (
      <>
        <p className={`SearchHelper textColor ${isMobile ? 'text-regular--medium' : 'text-regular--small'}`}>
          Начните вводить группу, преподавателя или аудиторию
        </p>
        <SearchInput />
      </>
    );
  }

  getSearchResult() {
    if (this.props.findInput.length > 0) return <SearchResult />;
  }

  render() {
    const { match, windowSizes } = this.props;

    if (windowSizes.width > Consts.DESKTOP_MIN_WIDTH) {
      return (
        <div className={"Base textColor"}>
          <h2 className={"TittleType text-bold--header"}>Поиск</h2>
          <Notification hide={match.path !== "/" ? "hide" : " "} />
          {match.path !== "/" ? this.getDescription() : this.getSearch()}
          {this.getSearchResult()}
        </div>
      );
    } else {
      return (
        <>
          <Notification hide={match.path !== "/" ? "hide" : " "} />
          {match.path === "/" ? this.getSearch() : this.getDescription(false)}
          {this.getSearchResult()}
        </>
      );
    }
    //return
  }
}

const mapStateToProps = (state) => {
  return {
    groupsList: state.groupsList,
    facultyList: state.facultyList,
    teachersList: state.teachersList,
    auditoryList: state.auditoryList,
    findInput: state.filterItems,
    windowSizes: state.windowSizes,
  };
};

export default connect(mapStateToProps)(Base);
