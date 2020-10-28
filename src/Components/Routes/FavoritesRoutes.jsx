import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import SettingsView from "../Views/SettingsView/SettingsView";

class FavoritesRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/settings'} render={routerProps => <SettingsView {...routerProps}/>}/>
            </Switch>
        );
    }
}

export default FavoritesRoutes;