import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Docs from "../../views/Docs";
import Tips from "../../views/Tips";
import cx from "classnames";

const Header = () => (
  <div className={cx("hero is-primary is-fluid", styles.Hero)}>
    <div className={cx("hero-body has-text-centered")}>
      <h1 className="title is-center">React's magic</h1>
      <p className="subtitle">React is awesome</p>
    </div>
    <nav className={cx("navbar is-expanded", styles.NavBar)} role="navigation" aria-label="main navigation">
      <ul className={cx(styles.NavBar)}>
        <li>
          <NavLink activeClassName="is-active" exact to="/" className="navbar-item navbar-start mr-4">
            Docs
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="is-active" to="/tips" className="navbar-item">
            Tips
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
