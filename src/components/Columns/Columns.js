import React, { useState } from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";

const Columns = () => {
  const [collapsed, isCollapsed] = useState(false);

  return (
    <div className={(cx("columns"), styles.Columns)}>
      {collapsed && (
        <button onClick={() => isCollapsed(false)} className="button">
          Show
        </button>
      )}

      {!collapsed && (
        <button onClick={() => isCollapsed(true)} className="button">
          Hide
        </button>
      )}
      {!collapsed && (
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
};

export default Columns;
