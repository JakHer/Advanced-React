import React, { useState } from "react";
import styles from "./ItemsList.module.scss";
import cx from "classnames";

const items = [
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
  "Dolore ea in nostrud magna ea cillum consectetur amet. Adipisicing occaecat mollit cupidatat reprehenderit exercitation proident. Nulla eu eu officia pariatur ex ex nulla fugiat proident consectetur labore eiusmod voluptate. Qui Lorem est nisi aliqua aute veniam proident fugiat.",
];

const ItemsList = () => {
  const [collapse, isCollapsed] = useState(true);

  return (
    <ul className={cx("box", styles.ItemsList)}>
      {collapse && (
        <button onClick={() => isCollapsed(false)} className={cx("button mb-4")}>
          Collapse
        </button>
      )}
      {!collapse && (
        <button onClick={() => isCollapsed(true)} className={cx("button mb-4")}>
          Expand
        </button>
      )}

      {collapse && items.map((item) => <li className={cx("box notification is-primary", styles.ItemsListItem)}>{item}</li>)}
    </ul>
  );
};

export default ItemsList;
