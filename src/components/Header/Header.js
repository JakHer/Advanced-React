import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Docs from "../../views/Docs";
import Tips from "../../views/Tips";
import cx from "classnames";

const Header = () => (
  <div>
    <div>
      <h1>React's magic</h1>
      <p>React is awesome</p>
    </div>
    <nav className={cx("navbar")} role="navigation" aria-label="main navigation">
      <ul className="navbar-start">
        <li>
          <NavLink activeClassName={styles.NavLinkActive} exact to="/" className="navbar-item">
            Docs
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName={styles.NavLinkActive} to="/tips" className="navbar-item">
            Tips
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
