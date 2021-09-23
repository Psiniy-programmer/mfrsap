import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import FavoritesView from "../Views/FavoritesView/FavoritesView";
import AppHeader from "../App/Header/AppHeader";
import routes from "../../helpers/routes";

class FavoritesRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={routes.favorites} render={routerProps => <>
                    <AppHeader/>
                    <FavoritesView {...routerProps}/>
                </>}/>
            </Switch>
        );
    }
}

export default FavoritesRoutes;