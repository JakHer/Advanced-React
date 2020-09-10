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
  const { changePage, currentPage } = useContext(WizzardContext);

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

const ProgressBar = () => {
  const { currentPage } = useContext(WizzardContext);

  let procentageProgress = ((currentPage / 3) * 100).toFixed(0);

  return (
    <div className={cx(styles.ProgressWrapper)}>
      {currentPage === 1 || currentPage === 2 ? (
        <>
          <progress className={cx("progress is-primary mt-4", styles.ProgressBar)} value={procentageProgress} max="100">
            {procentageProgress}
          </progress>
          <p className={cx("tag is-info", styles.ProgressParagraph)}>{procentageProgress}%</p>
        </>
      ) : (
        <>
          <progress className={cx("progress is-primary mt-4", styles.ProgressBar)} value="90" max="100">
            90%
          </progress>
          <p className={cx("tag is-info", styles.ProgressParagraph)}>90%</p>
        </>
      )}
    </div>
  );
};

export { Page, Controls, Wizzard, ProgressBar };
