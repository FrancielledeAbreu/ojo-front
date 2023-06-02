import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import MovieDetails from "../pages/movieDetails/movieDetails";

//apoio para rotas
export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/movie-details/:id", name: "MovieDetails", component: MovieDetails },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map((route, key) => (
        <Route key={key} exact path={route.path}>
          <route.component />
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
