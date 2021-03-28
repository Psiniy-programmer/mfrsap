import React, { Component } from "react";
import Timer from "../../../Timer/Timer";
import "../style.css";

class Double extends Component {
  isOpacity(opacity) {
    return opacity ? "context_unactive" : "context_active";
  }

  getGroupInfo(info, data, opacity, soonClass) {
    return (
      <div
        className={`${"context_aud"} ${this.isOpacity(!opacity)} scheduleColor`}
      >
        <div className="context__leftInfo">
          <h4 className={`context__subject text-bold--large ${soonClass} ${info.leftInfo !== null ? 'subject__double' : 'subject__single'}`}>
            {data.subject}
            {info.leftInfo !== null ? <p className="dopInfo">{info.leftInfo}</p> : ""}
          </h4>
            {info.underSubject !== "" && info.underSubject !== undefined ? (
              <p
                className={`context__underSubject text-regular--small ${soonClass}`}
              >
                {info.underSubject.constructor === Array
                  ? info.underSubject.join(", ")
                  : info.underSubject}
              </p>
            ) : null}
          {info.rightInfo !== null && info.rightInfo !== undefined ? (
            <p className={`context-under text-regular--small ${soonClass}`}>
              {info.rightInfo.constructor === Array
                ? info.rightInfo.join(", ")
                : info.rightInfo}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  getAudInfo(info, data, opacity, soonClass) {
    return (
      <div
        className={`${"context_aud"} ${this.isOpacity(!opacity)} scheduleColor`}
      >
        <div className="context__leftInfo">
          <h4 className={`context__subject text-bold--large ${soonClass}`}>
            {data.subject}
          </h4>
          {info.underSubject !== "" && info.underSubject !== undefined ? (
            <p
              className={`context__underSubject text-regular--small ${soonClass}`}
            >
              {info.underSubject.constructor === Array
                ? info.underSubject.join(", ")
                : info.underSubject}
            </p>
          ) : null}
          <div
            className={`${info.rightInfo !== null ? "leftInfo__double" : ""}`}
          >
            {info.leftInfo !== null && info.leftInfo !== undefined ? (
              <p className={`context-under text-regular--small ${soonClass}`}>
                {info.leftInfo.constructor === Array
                  ? info.leftInfo.join(", ")
                  : info.leftInfo}
              </p>
            ) : null}
            {info.rightInfo !== null ? <p className="dopInfo">{info.rightInfo}</p> : ""}
          </div>
        </div>
      </div>
    );
  }

  getRasp(info, data, opacity, soonClass) {
    const { type } = this.props;
    switch (type) {
      case 'aud':
        return this.getAudInfo(info, data, opacity, soonClass);
      case 'group':
        return this.getGroupInfo(info, data, opacity, soonClass);
      default:
        break;
    }
    if (type === "aud") return this.getAudInfo(info, data, opacity, soonClass);
    return (
      <>
        <div
          className={`${
            info.rightInfo === null ? "context_aud" : "context"
          } ${this.isOpacity(!opacity)} scheduleColor`}
        >
          <div className="context__leftInfo">
            <h4 className={`context__subject text-bold--large ${soonClass}`}>
              {data.subject}
            </h4>
            {info.underSubject !== "" && info.underSubject !== undefined ? (
              <p
                className={`context__underSubject text-regular--small ${soonClass}`}
              >
                {info.underSubject.constructor === Array
                  ? info.underSubject.join(", ")
                  : info.underSubject}
              </p>
            ) : null}
            {info.leftInfo !== null && info.leftInfo !== undefined ? (
              <p className={`context-under text-regular--small ${soonClass}`}>
                {info.leftInfo.constructor === Array
                  ? info.leftInfo.join(", ")
                  : info.leftInfo}
              </p>
            ) : null}
          </div>
          <div className={info === null ? "empty" : "context__rightInfo"}>
            <p className={`text-regular--small ${soonClass}`}>
              {info.rightInfo}
            </p>
          </div>
        </div>
      </>
    );
  }

  getEmpty(opacity, soonClass) {
    let color =
      !soonClass && soonClass !== undefined && soonClass.length > 0
        ? soonClass
        : "scheduleColor";

    return (
      <p
        className={`context text-bold--large ${color} ${this.isOpacity(
          !opacity
        )}`}
      >
        Занятия нет
      </p>
    );
  }

  checkRasp(info, data, opacity, soonClass) {
    let res;

    if (Object.keys(info[1]).length === 0) {
      if (data[0].week === 2)
        res = this.getRasp(info[0], data[0], opacity, soonClass);
      else res = this.getEmpty(opacity, soonClass);
    } else {
      res = this.getRasp(info[1], data[1], opacity, soonClass);
    }
    return res;
  }

  render() {
    const { soon, diff, opacity, data, info, timer } = this.props;
    const soonClass = soon ? "soon" : "";

    return (
      <div className={`${soonClass} schedule-item schedule-item__Double`}>
        <Timer diff={diff} soon={soon} timer={timer} />
        <div className="Double__info">
          <div className={"schedule-item__numerator"}>
            {data[0].week === 1
              ? this.getRasp(info[0], data[0], !opacity, soonClass)
              : this.getEmpty(!opacity)}
          </div>
          <div className="splitter" />
          <div className={"schedule-item__denominator"}>
            {this.checkRasp(info, data, opacity, soonClass)}
          </div>
        </div>
      </div>
    );
  }
}

export default Double;
