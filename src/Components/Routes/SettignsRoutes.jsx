import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SettingsView from "../Views/SettingsView/SettingsView";
import SearchPage from "../App/Header/AppHeader";

class SettignsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/settings'} render={routerProps => <>
                    <SearchPage {...routerProps}/>
                    <SettingsView {...routerProps}/>
                </>}/>
            </Switch>
        );
    }
}

export default SettignsRoutes;