import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./style.css";
import {changeLangRusToEng, finderIsEmpty, generateUniqKey,} from "../../../helpers/helpers";
import consts from "../../../helpers/consts";

class SearchView extends Component {
    getView() {
        const {facultyList, windowWidth} = this.props;
        const facList = [];
        const isMobile = windowWidth > consts.DESKTOP_MIN_WIDTH;

        facultyList.data.map((item, index) => {
            let fac = (
                <Link
                    key={generateUniqKey("facultyItem", index)}
                    to={`/search/${changeLangRusToEng(item.facultyname)}`}
                >
                    <span className="text-medium--medium">{item.facultyname}</span>
                </Link>
            );
            return facList.push(fac);
        });

        return (
            <>
                <p className={`SearchHelper__list textColor ${isMobile ? 'text-regular--medium' : 'text-regular--small'}`}>
                    Или выберите группу из списка
                </p>
                <div className={"SearchButtons raspTextColor"}>{facList}</div>
            </>
        );
    }

    render() {
        return (
            <div
                className={`Search ${
                    finderIsEmpty(this.props.findInput) ? "SearchHide" : ""
                }`}
            >
                {this.getView()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems,
        windowWidth: state.windowSizes.width
    };
};

export default connect(mapStateToProps)(SearchView);
