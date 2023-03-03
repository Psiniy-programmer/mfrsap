import React, {Component} from "react";
import {connect} from "react-redux";
import consts from "../../../../../../helpers/consts";
import "./style.css";

class EmptyCard extends Component {
    getHyphen() {
        const isMobile = this.props.windowWidth < consts.DESKTOP_MIN_WIDTH;

        if (!isMobile) {
            return <>
                <p className="hyphen hyphen_start text-bold--large">—</p>
                <p className="hyphen hyphen_end text-bold--large">—</p>
            </>;
        }
    }

    render() {
        const {soon, children} = this.props;

        return <>
            <div
                className={`emptyCard text-bold--large ${
                    soon ? "soon emptyCard__red" : "scheduleColor"
                }`}
            >
                {children}
                <p className="emptyCard__text emptyMobile">Занятия нет</p>
                <p className="emptyCard__text emptyDesktop">—</p>
            </div>
            {this.getHyphen()}
        </>;
    }
}

const mapStateToProps = (state) => {
    return {
        windowWidth: state.windowSizes.width,
    };
};

export default connect(mapStateToProps)(EmptyCard);
