import React, { useContext, useState, useEffect } from "react";
import cx from "classnames";
import styles from "./MultiStep.module.scss";

const Page = ({ children, pageIndex }) => {
  const { currentPage, updatePageIndexes } = useContext(WizzardContext);

  useEffect(() => {
    updatePageIndexes(pageIndex);
  });

  return currentPage === pageIndex ? children : null;
};

const Controls = (props) => {
  const { changePage, currentPage, pageIndexes } = useContext(WizzardContext);

  return (
    <div {...props} className={cx(styles.ButtonsBox)}>
      <button
        disabled={currentPage === 1 && "disabled"}
        className={cx("button", styles.Button)}
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentPage === 3 && "disabled"}
        className={cx("button", styles.Button)}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      {currentPage === 3 && <button className={cx("button", styles.Button)}>Submit</button>}
    </div>
  );
};

const WizzardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pageIndexes: [],
  updatePageIndexes: () => {},
});

const Wizzard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIndexes, setPageIndexes] = useState([]);

  const updatePageIndexes = (pageIndex) => {
    if (pageIndexes.includes(pageIndex)) {
      return;
    }

    setPageIndexes([...pageIndexes, pageIndex]);
  };

  const changePage = (newPageIndex) => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        changePage,
        pageIndexes,
        updatePageIndexes,
      }}
    >
      {children}
    </WizzardContext.Provider>
  );
};

export { Page, Controls, Wizzard };
