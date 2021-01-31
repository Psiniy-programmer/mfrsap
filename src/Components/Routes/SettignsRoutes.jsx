import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SettingsView from "../Views/SettingsView/SettingsView";
import ThemeChanger from "../Views/SettingsView/ThemeChanger/ThemeChanger";
import AppHeader from "../App/Header/AppHeader";
import Feedback from "../Views/SettingsView/Feedback/Feedback";
import Developers from "../Views/SettingsView/Developers/Developers";

class SettignsRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/settings'} render={routerProps => <>
                    <AppHeader/>
                    <SettingsView {...routerProps}/>
                </>}/>
                <Route exact path={'/settings/theme'} render={routerProps => <>
                    <AppHeader/>
                    <ThemeChanger {...routerProps}/>
                </>}/>
                <Route exact path={'/settings/feedback'} render={routerProps => <>
                    <AppHeader/>
                    <Feedback/>
                </>}/>
                <Route exact path={'/settings/developers'} render={routerProps => <>
                    <AppHeader/>
                    <Developers/>
                </>}/>
            </Switch>
        );
    }

}

export default SettignsRoutes;