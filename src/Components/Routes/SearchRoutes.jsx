import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import DepartmentList from "../Views/SearchView/DepartmentList/DepartmentList";
import CourseList from "../Views/SearchView/CourseList/CourseList";
import Rasp from "../Views/RaspView/Rasp";
import Base from "../App/Base/Base";
import AppHeader from "../App/Header/AppHeader";
import NewGroupsList from "../Views/SearchView/NewGroupsList/NewGroupsList";
import {connect} from "react-redux";
import Loader from "../Loader/Loader";

class SearchRoutes extends Component {
    render() {
        const {altList, newGroupsList} = this.props;

        if (altList.loading) {
            return <Loader/>
        } else {
            return (
                <Switch>
                    <Route
                        exact
                        path={`/search/:faculty`}
                        render={(routerProps) => (
                            <>
                                <AppHeader/>
                                <div className="content_info">
                                    <Base {...routerProps} />
                                    <DepartmentList {...routerProps} />
                                </div>
                            </>
                        )}
                    />
                    <Route
                        exact
                        path={`/search/:faculty/:department`}
                        render={(routerProps) => (
                            <>
                                <AppHeader/>
                                <div className="content_info">
                                    <Base {...routerProps} />
                                    <CourseList {...routerProps} />
                                </div>
                            </>
                        )}
                    />
                    <Route
                        exact
                        path={`/search/:faculty/:department/:course/:suffix`}
                        render={(routerProps) => (
                            <>
                                <AppHeader/>
                                <div className="content_info">
                                    <Base {...routerProps} />
                                    <NewGroupsList {...routerProps}/>
                                </div>
                            </>
                        )}
                    />
                    <Route
                        exact
                        path={`/search/:faculty/:department/:course/:suffix/:rasp`}
                        render={(routerProps) => <Rasp {...routerProps} />}
                    />
                </Switch>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        altList: state.altList,
        newGroupsList: state.newGroupsList
    };
};

export default connect(mapStateToProps, null)(SearchRoutes);
