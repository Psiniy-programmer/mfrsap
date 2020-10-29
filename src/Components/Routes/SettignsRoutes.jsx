import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SettingsView from "../Views/SettingsView/SettingsView";
import SearchPage from "../App/Header/AppHeader";
import ThemeChanger from "../Views/SettingsView/ThemeChanger/ThemeChanger";

class SettignsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/settings'} render={routerProps => <>
                    <SearchPage {...routerProps}/>
                    <SettingsView {...routerProps}/>
                </>}/>
                <Route exact path={'/settings/theme'} render={routerProps => <ThemeChanger {...routerProps}/>}/>
            </Switch>
        );
    }
}

export default SettignsRoutes;