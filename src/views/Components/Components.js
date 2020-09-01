import React, { useState } from "react";
import styles from "./Components.module.scss";
import cx from "classnames";

const Components = () => {
  const [inputContent, setInputContent] = useState("Write task to do");
  const [itemsList, setItemsList] = useState([
    {
      id: "1",
      content: "Add new item",
    },
  ]);

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const addNewItem = () => {
    const newElement = {
      content: inputContent,
      id: itemsList.length + 1,
    };
    setItemsList([...itemsList, newElement]);
  };

  const removeItem = (id) => {
    const newItemsList = itemsList.filter((item) => item.id !== id);
    setItemsList(newItemsList);
  };

  return (
    <div className={cx("box mt-4", styles.Container)}>
      <input placeholder={inputContent} className="input mb-4" onChange={handleInputContent} />
      <button className="button is-success mb-4" onClick={addNewItem}>
        Add new item
      </button>

      {itemsList.map((item) => (
        <div key={item.id} className={cx("notification is-info", styles.Notification)}>
          <button onClick={() => removeItem(item.id)} className="delete"></button>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Components;
