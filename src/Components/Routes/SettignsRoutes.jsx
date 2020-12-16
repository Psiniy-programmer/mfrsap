import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SettingsView from "../Views/SettingsView/SettingsView";
import AppHeader from "../App/Header/AppHeader";
import ThemeChanger from "../Views/SettingsView/ThemeChanger/ThemeChanger";
import Base from "../App/Base/Base";

class SettignsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/settings'} render={routerProps => <>
                    <AppHeader {...routerProps}/>
                    <Base {...routerProps}/>
                    <SettingsView {...routerProps}/>
                </>}/>
                <Route exact path={'/settings/theme'} render={routerProps => <ThemeChanger {...routerProps}/>}/>
            </Switch>
        );
    }
}

export default SettignsRoutes;