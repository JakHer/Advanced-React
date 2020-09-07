import React, { useContext, useState } from "react";
import cx from "classnames";
import styles from "./MultiStep.module.scss";

const Page = ({ children, pageIndex }) => {
  const { changePage, currentPage } = useContext(WizzardContext);

  return currentPage === pageIndex ? <>{children}</> : null;
};

const Controls = () => {
  const { changePage, currentPage } = useContext(WizzardContext);

  return (
    <div className={cx(styles.ButtonsBox)}>
      <button className={cx("button", styles.Button)} onClick={() => changePage(currentPage - 1)}>
        Previous
      </button>
      <button className={cx("button", styles.Button)} onClick={() => changePage(currentPage + 1)}>
        Next
      </button>
      <button className={cx("button", styles.Button)}>Submit</button>
    </div>
  );
};

const WizzardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
});

const Wizzard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPageIndex) => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        changePage,
      }}
    >
      {children}
    </WizzardContext.Provider>
  );
};

export { Page, Controls, Wizzard };
