import React from "react";
import styles from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className={styles.App}>
      <h1 className="title is-1 is-spaced">Title 1</h1>
      <button className="button is-primary">Primary</button>

      <div className="card">
        <div className="card-content">
          <p className="title">
            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
