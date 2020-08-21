import React from "react";
import styles from "./App.module.scss";
import cx from "classnames";
import ItemsList from "./ItemsList/ItemsList";

const App = () => (
  <div className={cx("container is-fluid mt-4", styles.App)}>
    <ItemsList />
  </div>
);

export default App;
