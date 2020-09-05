import React, { useRef, useEffect, useState } from "react";
import { DetectClose, ModalAnimation } from "../../hooks/detectClose";
import styles from "./UseRef.module.scss";
import cx from "classnames";
import Gsap from "gsap";

const UseRef = () => {
  const buttonAnimation = useRef(null);
  const modalAnimation = useRef(null);
  const tl = useRef(null);
  const modalRef = useRef(null);
  const [isModalOpen, toggleModal] = useState(true);

  DetectClose(modalRef, toggleModal);
  ModalAnimation(tl, modalAnimation);

  useEffect(() => {
    Gsap.from(buttonAnimation.current, 4, { x: "-150%", y: "-150%", opacity: 0 });
    isModalOpen ? tl.current.play() : tl.current.reverse();
  }, [isModalOpen]);

  return (
    <div className={cx("container mt-4", styles.Container)}>
      <h2 className="title is-3">UseRef</h2>
      {!isModalOpen && <div ref={buttonAnimation} className={styles.Wrapper}></div>}

      <div ref={modalAnimation} className={cx("modal is-active pr-3 pl-3")}>
        <div className="modal-background"></div>
        <div ref={modalRef} className="modal-content">
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
