import React from "react";
import styles from "./App.module.scss";
import cx from "classnames";
import Header from "./components//Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Docs from "./views/Docs";
import Tips from "./views/Tips";

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Docs} />
        <Route exact path="/tips" component={Tips} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
