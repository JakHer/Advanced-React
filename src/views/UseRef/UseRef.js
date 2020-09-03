import React, { useRef, useEffect } from "react";
import styles from "./UseRef.module.scss";
import cx from "classnames";
import Gsap from "gsap";

const UseRef = () => {
  const buttonAnimation = useRef(null);

  useEffect(() => {
    Gsap.from(buttonAnimation.current, 2, { x: `-100%`, opacity: 0, scale: 2 });
  });

  return (
    <div className={cx("container mt-4", styles.Container)}>
      <h2 className="title is-3">UseRef</h2>
      <div ref={buttonAnimation} className={styles.Wrapper}></div>
    </div>
  );
};

export default UseRef;
