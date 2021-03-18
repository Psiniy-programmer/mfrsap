import React, { Component } from "react";
import Timer from "../Timer/Timer";
import "../style.css";

class Single extends Component {
  isOpacity() {
    const { opacity } = this.props;
    return opacity ? "context_unactive" : "context_active";
  }

  getTeacherInfo(soonClass) {
    return;
  }

  getGroupInfo(soonClass) {
    return <></>
  }

  getAudInfo(soonClass) {
    const { 
      soon,
      diff,
      timer,
      subject,
      underSubject,
      leftInfo,
      rightInfo,
    } = this.props;

    return (
      <div className={`schedule-item schedule-item__Single ${soonClass}`}>
        <Timer soon={soon} diff={diff} timer={timer} />
        <div
          className={`context_aud scheduleColor`}
        >
          <div className="context__leftInfo">
            <h4 className={`context__subject text-bold--large ${soonClass}`}>
              {subject}
            </h4>
            {underSubject !== undefined && underSubject.length !== 0 ? (
              <p
                className={`context__underSubject text-regular--small ${soonClass}`}
              >
                {underSubject}
              </p>
            ) : null}
            <div className={`${rightInfo !== null ?  'leftInfo__double' : ''}`}>
              {leftInfo !== null && leftInfo !== undefined ? (
                <p className={`context-under text-regular--small ${soonClass}`}>
                  {leftInfo.constructor === Array
                    ? leftInfo.join(", ")
                    : leftInfo}
                </p>
              ) : null}
              <p className={`text-regular--small ${soonClass}`}>{rightInfo}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { soon, timer, isEmpty, type } = this.props;

    const soonClass = soon ? "soon" : "";

    if (isEmpty)
      return (
        <div className={"schedule-item schedule-item__Single"}>
          <Timer timer={timer} />
          <div className="context context__leftInfo">
            <h2
              className={`context__subject text-bold--large scheduleColor ${soonClass}`}
            >
              Занятий нет
            </h2>
          </div>
        </div>
      );
    else {
      // console.error(type);

      switch (type) {
        case "aud":
          return this.getAudInfo(soon);
        case "group":
          return this.getGroupInfo(soon);
        case "teacher":
          return this.getTeacherInfo(soon);
        default:
          break;
      }
    }
  }
}

export default Single;
