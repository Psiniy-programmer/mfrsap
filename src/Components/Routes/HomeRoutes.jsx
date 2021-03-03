import React, { Component } from "react";
import AppHeader from "../App/Header/AppHeader";
import Base from "../App/Base/Base";
import Search from "../Views/SearchView/SearchView";
import { Route } from "react-router-dom";

class HomeRoutes extends Component {
  render() {
    return (
      <Route
        exact
        path={`/`}
        render={(routerProps) => (
          <>
            <AppHeader />
            <div className="content_info">
              <Base {...routerProps} />
              <Search />
            </div>
          </>
        )}
      />
    );
  }
}

export default HomeRoutes;
