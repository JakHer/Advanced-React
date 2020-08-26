import React from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";
import withCollapse from "../../hoc/withCollapse";

const Columns = ({ isCollapsed, toggle }) => (
  <div className={(cx("columns"), styles.Columns)}>
    <button onClick={toggle} className="button">
      {isCollapsed ? "show" : "hide"}
    </button>

    {!isCollapsed && (
      <>
        <div className={cx("column", styles.Column)}>
          <div className="notification is-primary">
            <p className={cx("subtitle is-3 is-center", styles.SubTitle)}>Siema</p>
          </div>
        </div>
        <div className={cx("column", styles.Column)}>
          <div className="notification is-primary">
            <p className={cx("subtitle is-3 is-center", styles.SubTitle)}>Siema</p>
          </div>
        </div>
        <div className={cx("column", styles.Column)}>
          <div className="notification is-primary">
            <p className={cx("subtitle is-3 is-center", styles.SubTitle)}>Siema</p>
          </div>
        </div>
        <div className={cx("column", styles.Column)}>
          <div className="notification is-primary">
            <p className={cx("subtitle is-3 is-center", styles.SubTitle)}>Siema</p>
          </div>
        </div>
      </>
    )}
  </div>
);

export default withCollapse(Columns);
