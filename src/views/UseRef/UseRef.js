import React, { useRef, useEffect, useState } from "react";
import styles from "./UseRef.module.scss";
import cx from "classnames";
import { TimelineMax } from "gsap/gsap-core";

const UseRef = () => {
  const buttonAnimation = useRef(null);
  const modalAnimation = useRef(null);
  const tl = useRef(null);
  const [isModalOpen, toggleModal] = useState(true);

  useEffect(() => {
    tl.current = new TimelineMax({ paused: true }).from([modalAnimation.current], 2, { y: `-200%`, display: "none" });
  }, []);

  useEffect(() => {
    isModalOpen ? tl.current.play() : tl.current.reverse();
  }, [isModalOpen]);

  return (
    <div className={cx("container mt-4", styles.Container)}>
      <h2 className="title is-3">UseRef</h2>
      {!isModalOpen && <div ref={buttonAnimation} className={styles.Wrapper}></div>}

      <div ref={modalAnimation} className={cx("modal is-active pr-3 pl-3")}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <article className="message">
            <div className="message-header">
              <p>Hello World</p>
              <button onClick={() => toggleModal(!isModalOpen)} className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
