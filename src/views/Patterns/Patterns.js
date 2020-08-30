import React from "react";
import cx from "classnames";
import styles from "./Patterns.module.scss";

const items = [{ value: "apple" }, { value: "pear" }, { value: "orange" }, { value: "grape" }, { value: "banana" }];

const Patterns = () => (
  <div className={cx("container mt-4", styles.Box)}>
    <div className={cx("dropdown is-active", styles.Dropdown)}>
      <input className={cx("input", styles.Input)} autoComplete="off" type="text" placeholder="Text input" />
      <div className={cx("dropdown-menu pt-0", styles.DropdownMenu)} id="dropdown-menu" role="menu">
        <div className="dropdown-content pt-0">
          {items.map(({ value }) => (
            <li className="dropdown-item button">{value}</li>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Patterns;
