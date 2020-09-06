import React from "react";
import Header from "./components//Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Docs from "./views/Docs";
import Tips from "./views/Tips";
import Patterns from "./views/Patterns/Patterns";
import Components from "./views/Components/Components";
import UseEffect from "./views/UseEffect/UseEffect";
import UseRef from "./views/UseRef/UseRef";
import Users from "./views/Users";

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Docs} />
        <Route path="/tips" component={Tips} />
        <Route path="/patterns" component={Patterns} />
        <Route path="/components" component={Components} />
        <Route path="/useeffect" component={UseEffect} />
        <Route path="/useref" component={UseRef} />
        <Route path="/users" component={Users} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
