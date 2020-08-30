import React from "react";
import Header from "./components//Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Docs from "./views/Docs";
import Tips from "./views/Tips";
import Patterns from "./views/Patterns/Patterns";

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Docs} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/patterns" component={Patterns} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
