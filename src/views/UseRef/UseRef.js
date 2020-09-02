import React, { useRef } from "react";
import styles from "./UseRef.module.scss";
import cx from "classnames";

const UseRef = () => {
  const myInputRef = useRef(null);

  const focusInput = () => {
    myInputRef.current.focus();
    myInputRef.current.style.transform = "scaleX(.5) translateX(-50%)";
  };

  return (
    <div className={cx("container mt-4", styles.Container)}>
      <h2 className="title is-3">UseRef</h2>
      <input ref={myInputRef} className={cx("input", styles.Input)} type="text" />
      <button onClick={focusInput} className={cx("button mt-4", styles.Button)}>
        focus input
      </button>
    </div>
  );
};

export default UseRef;
