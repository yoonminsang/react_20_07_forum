import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home, ManageHome } from "./routes";
import { AuthSignIn, AuthSignUp } from "./containers";
import axios from "axios";

const App = ({ autoSignIn }) => {
  useEffect(() => {
    axios
      .get("/logged")
      .then(function (res) {
        if (res.data.user) {
          autoSignIn(res.data.user);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/manage" component={ManageHome} />
        <Route exact path="/auth/signup" component={AuthSignUp} />
        <Route exact path="/auth/signin" component={AuthSignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
