import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import {
  DARK_THEME,
  LIGHT_THEME,
  SYSTEM_THEME,
} from "../../../../../../../reducers/theme";

const red = "#c15555",
  black = "#09201e",
  white = "#ffffff";

class Timer extends Component {
  getDiffTimerSvg() {
    return (
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
        <path
          d="M6.04565 5.55095H7.26941V11.1019H6.04565V5.55095Z"
          fill={red}
        />
        <path d="M4.82178 0H8.49306V1.23355H4.82178V0Z" fill={red} />
        <path
          d="M14 4.3174L13.1311 3.44775L11.7544 4.83549C10.6274 3.52363 9.04239 2.69987 7.32857 2.53536C5.61476 2.37086 3.90395 2.87825 2.5516 3.95211C1.19926 5.02598 0.309357 6.58376 0.0667976 8.30179C-0.175762 10.0198 0.24767 11.766 1.24912 13.1775C2.25056 14.589 3.75302 15.5574 5.44433 15.8814C7.13563 16.2053 8.88574 15.86 10.331 14.9171C11.7763 13.9743 12.8057 12.5064 13.2052 10.8184C13.6047 9.13043 13.3437 7.3522 12.4764 5.85317L14 4.3174ZM6.65744 14.8025C5.56828 14.8025 4.50357 14.477 3.59796 13.867C2.69235 13.2571 1.98652 12.3902 1.56971 11.3758C1.15291 10.3615 1.04385 9.24543 1.25634 8.16865C1.46882 7.09187 1.99331 6.10278 2.76346 5.32647C3.53362 4.55015 4.51486 4.02147 5.5831 3.80729C6.65133 3.5931 7.75859 3.70303 8.76485 4.12317C9.77111 4.54331 10.6312 5.25479 11.2363 6.16764C11.8414 7.08049 12.1644 8.15371 12.1644 9.25159C12.1644 10.7238 11.5842 12.1357 10.5514 13.1767C9.51867 14.2177 8.11797 14.8025 6.65744 14.8025Z"
          fill={red}
        />
      </svg>
    );
  }

  getTimerSvg(color) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 3C7.63261 3 7.75979 3.05268 7.85355 3.14645C7.94732 3.24021 8 3.36739 8 3.5V8.71L11.248 10.566C11.3598 10.6334 11.4408 10.7419 11.4736 10.8683C11.5065 10.9946 11.4886 11.1288 11.4238 11.2422C11.3591 11.3556 11.2525 11.4391 11.127 11.4749C11.0014 11.5108 10.8669 11.4961 10.752 11.434L7.252 9.434C7.17547 9.39029 7.11186 9.32712 7.06761 9.25091C7.02335 9.17469 7.00003 9.08813 7 9V3.5C7 3.36739 7.05268 3.24021 7.14645 3.14645C7.24021 3.05268 7.36739 3 7.5 3Z"
          fill={color}
        />
      </svg>
    );
  }

  getTimerIcon() {
    const { currentTheme, soon } = this.props;

    if (soon) {
      return this.getTimerSvg(red);
    }

    let color = "";

    switch (currentTheme) {
      case SYSTEM_THEME:
        color = matchMedia("(prefers-color-scheme: dark)").matches
          ? white
          : black;
        break;
      case LIGHT_THEME:
        color = black;
        break;
      case DARK_THEME:
        color = white;
        break;
      default:
        break;
    }

    return this.getTimerSvg(color);
  }

  render() {
    const { soon, diff, timer } = this.props;
    console.warn(timer, diff);

    if (diff === null || diff === undefined) {
      return (
        <div className={`context__timer scheduleColor`}>
          <div className="context__timer_svg">{this.getTimerIcon()}</div>
          <p className={`text-regular--small ${soon}`}>{timer}</p>
        </div>
      );
    } else {
      return (
        <div className={`diff__timer scheduleColor`}>
          <div className="diff_timer_pair">
            <div className="context__timer_svg">{this.getTimerIcon()}</div>
            <p className={`text-regular--small ${soon}`}>{timer}</p>
          </div>
          <div className="diff__timer_dif">
            <div className="context__timer_svg">{this.getDiffTimerSvg()}</div>
            <p className={`text-regular--small ${soon}`}>{diff} мин.</p>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentTheme: state.theme,
  };
};

export default connect(mapStateToProps)(Timer);
