import React, { useState, useReducer } from "react";
import styles from "./Components.module.scss";
import cx from "classnames";

const Components = () => {
  const [inputContent, setInputContent] = useReducer((state, newState) => ({ ...state, ...newState }), {
    searchInputContent: "",
    itemInputContent: "",
  });
  const [itemsList, setItemsList] = useState([
    {
      id: "1",
      content: "Add new item",
    },
  ]);

  const handleInputContent = (e) => {
    console.log(e.target.value);
    setInputContent({
      [e.target.name]: e.target.value,
    });
  };

  const addNewItem = () => {
    const newElement = {
      content: inputContent.itemInputContent,
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
      <input
        name="itemInputContent"
        placeholder="Add new task"
        value={inputContent.itemInputContent}
        className="input mb-4"
        onChange={handleInputContent}
        type="text"
      />
      <button className="button is-success mb-4" onClick={addNewItem}>
        Add new item
      </button>

      <label className="label" htmlFor="searchTask" name="searchInputContent">
        Search for task
      </label>
      <input
        type="text"
        name="searchInputContent"
        className="input mb-4"
        placeholder="Search for task"
        value={inputContent.searchInputContent}
        onChange={handleInputContent}
      />

      {itemsList
        .filter((item) => item.content.toLocaleLowerCase().includes(inputContent.searchInputContent.toLowerCase()))
        .map((item) => (
          <div key={item.id} className={cx("notification is-info", styles.Notification)}>
            <button onClick={() => removeItem(item.id)} className="delete"></button>
            {item.content}
          </div>
        ))}
    </div>
  );
};

export default Components;
