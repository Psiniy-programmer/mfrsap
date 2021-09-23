import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SettingsView from "../Views/SettingsView/SettingsView";
import ThemeChanger from "../Views/SettingsView/ThemeChanger/ThemeChanger";
import AppHeader from "../App/Header/AppHeader";
import Feedback from "../Views/SettingsView/Feedback/Feedback";
import Developers from "../Views/SettingsView/Developers/Developers";
import ExportFav from '../Views/SettingsView/ExportFav/ExportFav';
import Manual from "../Views/SettingsView/Manual/Manual";
import routes from "../../helpers/routes";

class SettignsRoutes extends Component {
    render() {
        const {base, developers, feedback, manual, theme} = routes.settings;

        return (
            <Switch>
                <Route exact path={base} render={routerProps => <>
                    <AppHeader/>
                    <SettingsView {...routerProps}/>
                </>}/>
                <Route exact path={theme} render={routerProps => <>
                    <AppHeader/>
                    <ThemeChanger {...routerProps}/>
                </>}/>
                <Route exact path={feedback} render={() => <>
                    <AppHeader/>
                    <Feedback/>
                </>}/>
                <Route exact path={developers} render={() => <>
                    <AppHeader/>
                    <Developers/>
                </>}/>
                <Route exact path={routes.settings.export} render={() => <>
                    <AppHeader/>
                    <ExportFav/>
                </>}/>
                <Route exact path={manual} render={() => <>
                    <AppHeader/>
                    <Manual/>
                </>}/>
            </Switch>
        );
    }

}

export default SettignsRoutes;