import React from "react";
import styles from "./App.module.scss";
import cx from "classnames";
import Docs from "./views/Docs";
import Tips from "./views/Tips";

const App = () => (
  <>
    <h1>React's Magic</h1>
    <div className={cx("container mt-4", styles.App)}>
      <Tips />
    </div>
  </>
);

export default App;
