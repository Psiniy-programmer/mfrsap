import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import FavoritesView from "../Views/FavoritesView/FavoritesView";
import SearchPage from "../App/Header/AppHeader";

class FavoritesRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/favorites'} render={routerProps => <>
                    <SearchPage {...routerProps}/>
                    <FavoritesView {...routerProps}/>
                </>}/>
            </Switch>
        );
    }
}

export default FavoritesRoutes;