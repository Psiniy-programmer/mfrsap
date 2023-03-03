import React, {Component} from "react";

class DoubleContainer extends Component {
    render() {
        const {item, diff, children} = this.props;

        return (
            <div
                key={item.pairnumber}
                className={`rasp__item ${diff.soon ? "soon" : "scheduleColor"} `}
            >
                {children}
            </div>
        );
    }
}

export default DoubleContainer;
