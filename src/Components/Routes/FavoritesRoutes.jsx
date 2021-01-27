import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import FavoritesView from "../Views/FavoritesView/FavoritesView";
import Base from "../App/Base/Base";

class FavoritesRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/favorites'} render={routerProps => <>
                    <Base {...routerProps}/>
                    <FavoritesView {...routerProps}/>
                </>}/>
            </Switch>
        );
    }
}

export default FavoritesRoutes;