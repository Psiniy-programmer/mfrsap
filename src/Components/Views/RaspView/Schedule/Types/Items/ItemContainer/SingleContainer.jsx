import React, {Component} from "react";

class SingleContainer extends Component {
    render() {
        const {diff, children} = this.props;

        return (
            <div
                key={diff.timer}
                className={`rasp__item ${diff.soon ? "soon" : "scheduleColor"}`}
            >
                {children}
            </div>
        );
    }
}

export default SingleContainer;
