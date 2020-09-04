import React, { useEffect, useState } from "react";
import axios from "axios";
import cx from "classnames";
import styles from "./UseEffect.module.scss";

const UseEffect = () => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [isTooltipOpen, toggleTooltip] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      const response = await axios.get("https://run.mocky.io/v3/bab46a0e-4053-4d1a-bc71-d85af8359d7b?mocky-delay=1000ms");
      setItemList(response.data);
      setLoadingState(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container pl-3 pr-3">
      <button onClick={() => toggleTooltip(!isTooltipOpen)} className="button is-primary is-large mt-4 mb-4">
        Open tooltip
      </button>
      {isTooltipOpen && (
        <div class="notification is-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>
        </div>
      )}
      <ul className="box">
        <h2 className="title is-3">UseEffect</h2>
        {isLoading && <button className={cx("button is-loading is-large is-info", styles.LoadingButton)}></button>}
        {itemList.map((item) => (
          <li className="notification" key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;
