import React from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";
import withCollapse from "../../hoc/withCollapse";
import withAuth from "../../hoc/withAuth";

const Columns = ({ isCollapsed, toggle, isAuthorised, toggleAuth }) => (
  <div className={(cx("columns"), styles.Columns)}>
    <button onClick={toggle} className="button is-success">
      {isCollapsed ? "show" : "hide"}
    </button>

    {isAuthorised && (
      <button className={cx("button is-success")} onClick={toggleAuth}>
        log out
      </button>
    )}

    {!isAuthorised && (
      <button className={cx("button is-danger")} onClick={toggleAuth}>
        log in
      </button>
    )}

    {!isAuthorised && <h2 className="title has-text-warning">You are not logged in</h2>}
    {isAuthorised && <h2 className="title has-text-success">You are not logged in</h2>}

    {!isCollapsed && isAuthorised && (
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

export default withCollapse(withAuth(Columns));
