import React, {Component} from "react";
import MenuItem from "../../../../MenuItem/MenuItem";
import {connect} from "react-redux";
import {switchNumberToRoman, translateSuffixToEng} from "../../../../../helpers/helpers";
import Consts from "../../../../../helpers/consts";
import consts from "../../../../../helpers/consts";
import {Link} from "react-router-dom";
import "./style.css";
import setNewGroupsList from "../../../../../actions/newGroupsList";

class CourseListType extends Component {
    parseData() {
        const {data, url, setList, courseType} = this.props;

        const res = [];
        const suffix = translateSuffixToEng(courseType);
        for (let course in data) {
            if (course === "merged") {
                continue;
            }
            let courseNumber = switchNumberToRoman(course);
            let text = courseNumber + " курс";
            res.push(
                <Link
                    onClick={() => setList(data[course])}
                    key={text}
                    className="Link"
                    to={`${url}/${courseNumber}/${suffix}`}
                >
                    <MenuItem text={text}/>
                </Link>
            );
        }
        return res;
    }

    getType() {
        const {courseType, data, windowWidth} = this.props;
        const isMobile = windowWidth > consts.DESKTOP_MIN_WIDTH;

        let text = "";

        if (data.merged !== undefined && data.merged) {
            text = `${Consts.PREFIX[courseType]} и ${Consts.PREFIX.С}`;
        } else {
            text = Consts.PREFIX[courseType];
        }

        return <p
            className={`CoruseType__header textColor ${isMobile ? 'text-bold--large' : 'text-regular--medium'}`}>{text}</p>;
    }

    render() {
        return (
            <div className="CourseType">
                {this.getType()}
                {this.parseData()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        windowWidth: state.windowSizes.width
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setList: (payload) => {
            dispatch(setNewGroupsList(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseListType);
