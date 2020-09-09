import React from "react";
import * as MultiStep from "./Components/MultiStep/MultiStep";
import cx from "classnames";
import styles from "./Users.module.scss";

const Users = () => (
  <MultiStep.Wizzard>
    <div className="box">
      <MultiStep.Page pageIndex={1}>
        <div className={cx(styles.Wrapper)}>
          <div className="field">
            <div className={cx("control", styles.Control)}>
              <label htmlFor="name" className="label">
                What is your name
              </label>
              <input name="name" className="input is-primary" type="text" placeholder="What is your name" />
            </div>
          </div>
        </div>
      </MultiStep.Page>
      <MultiStep.Page pageIndex={2}>
        <div className={cx(styles.Wrapper)}>
          <div className="field">
            <div className={cx("control", styles.Control)}>
              <label htmlFor="name" className="label">
                What is your surname
              </label>
              <input name="name" className="input is-primary" type="text" placeholder="What is your surname" />
            </div>
          </div>
        </div>
      </MultiStep.Page>
      <MultiStep.Page pageIndex={3}>
        <div className={cx(styles.Wrapper)}>
          <div className="field">
            <div className={cx("control", styles.Control)}>
              <label htmlFor="name" className="label">
                What is your email address
              </label>
              <input name="name" className="input is-primary" type="text" placeholder="What is your email address" />
            </div>
          </div>
        </div>
      </MultiStep.Page>
      <MultiStep.Controls />
      <MultiStep.ProgressBar />
    </div>
  </MultiStep.Wizzard>
);

export default Users;
