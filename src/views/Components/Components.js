import React, { useState } from "react";
import styles from "./Components.module.scss";
import cx from "classnames";

const Components = () => {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [input, setInput] = useState("Kuba");

  const inputValueHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className={cx("box mt-4", styles.Container)}>
        <div className={styles.Wrapper}>
          <button className={cx("button is-success")} onClick={() => setCount(count < 3 ? count + 1 : count)}>
            +1
          </button>
          <h2 className="is-title-3">Counter: {count}</h2>
          <button className={cx("button is-danger")} onClick={() => setCount(count > 0 ? count - 1 : 0)}>
            -1
          </button>
        </div>
      </div>

      <div className={cx("box mt-4", styles.Container)}>
        <div className={styles.Wrapper}>
          <button className={cx("button is-success")} onClick={() => setDiscount(discount < 3 ? discount + 1 : discount)}>
            +1
          </button>
          <h2 className="is-title-3">Discount: {discount}</h2>
          <button className={cx("button is-danger")} onClick={() => setDiscount(discount > 0 ? discount - 1 : 0)}>
            -1
          </button>
        </div>
      </div>

      <div className={cx("container mt-4", styles.Container)}>
        <div className="box">
          <div className="box">
            <p>Normal: {count}</p>
            <p>Price: {count * 3}$</p>
          </div>
          <div className="box">
            <p>Discount: {discount}</p>
            <p>Price: {discount * 1.5}$</p>
          </div>
          <p>Total: {discount * 1.5 + count * 3}$</p>
          <button className="button is-success">Buy now!</button>
        </div>
      </div>

      <div className={cx("box mt-4", styles.Container, styles.ContainerWidth)}>
        <div className={cx("is-flex", styles.WrapperWidth)}>
          <input className="input mb-4" autoComplete="off" name="name" onChange={inputValueHandler} />
          <p className="is-subtitle-3">Your name is: {input}</p>
        </div>
      </div>
    </>
  );
};

export default Components;
