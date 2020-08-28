import React from "react";
import styles from "./ItemsList.module.scss";
import cx from "classnames";
import Collapse from "../../providers/Collapse";

const items = [
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
];

const ItemsList = () => {
  return (
    <Collapse
      render={({ isCollapsed, toggle }) => (
        <ul className={cx("box", styles.ItemsList)}>
          {!isCollapsed && (
            <button onClick={toggle} className={cx("button mb-4")}>
              Collapse
            </button>
          )}
          {isCollapsed && (
            <button onClick={toggle} className={cx("button mb-4")}>
              Expand
            </button>
          )}

          {!isCollapsed && items.map((item) => <li className={cx("box notification is-primary", styles.ItemsListItem)}>{item}</li>)}
        </ul>
      )}
    />
  );
};

export default ItemsList;
