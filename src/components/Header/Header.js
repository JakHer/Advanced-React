import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import cx from "classnames";

const Header = () => (
  <div className={cx("hero is-primary is-fluid", styles.Hero)}>
    <div className={cx("hero-body has-text-centered")}>
      <h1 className="title is-center">React's magic</h1>
      <p className="subtitle">React is awesome</p>
    </div>
    <nav className={cx("navbar is-expanded", styles.NavBar)} role="navigation" aria-label="main navigation">
      <ul className={cx(styles.NavBarList)}>
        <li className={styles.NavBarListItem}>
          <NavLink activeClassName="is-active" exact to="/" className={cx("navbar-item", styles.NavBarItem)}>
            Docs
          </NavLink>
        </li>

        <li className={styles.NavBarListItem}>
          <NavLink activeClassName="is-active" to="/tips" className={cx("navbar-item", styles.NavBarItem)}>
            Tips
          </NavLink>
        </li>
        <li className={styles.NavBarListItem}>
          <NavLink activeClassName="is-active" to="/patterns" className="navbar-item">
            Patterns
          </NavLink>
        </li>
        <li className={styles.NavBarListItem}>
          <NavLink activeClassName="is-active" to="/components" className="navbar-item">
            Components
          </NavLink>
        </li>
        <li className={styles.NavBarListItem}>
          <NavLink activeClassName="is-active" to="/useeffect" className="navbar-item">
            UseEffect
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
