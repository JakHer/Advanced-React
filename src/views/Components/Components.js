import React, { useState } from "react";
import styles from "./Components.module.scss";
import cx from "classnames";

const Components = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cx("box mt-4", styles.Container)}>
      <div className={styles.Wrapper}>
        <button className="button is-success" onClick={() => setCount(count + 1)}>
          +1
        </button>
        <h2 className="is-title-3">Counter: {count}</h2>
        <button className="button is-danger" onClick={() => setCount(count - 1)}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Components;
