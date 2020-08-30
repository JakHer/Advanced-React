import React from "react";
import cx from "classnames";
import styles from "./Patterns.module.scss";
import Downshift from "downshift";

const items = [{ value: "apple" }, { value: "pear" }, { value: "orange" }, { value: "grape" }, { value: "banana" }];

const Patterns = () => (
  <Downshift>
    {({ isOpen, inputValue, getInputProps, getLabelProps, getMenuProps, getItemProps, selectedItem, highlightedIndex }) => (
      <div className={cx("container mt-4", styles.Box)}>
        <div className={cx("dropdown", { "is-active": isOpen }, styles.Dropdown)}>
          <label {...getLabelProps()}>Enter a fruit</label>
          <input className={cx("input", styles.Input)} autoComplete="off" type="text" placeholder="Text input" {...getInputProps()} />
          <div className={cx("dropdown-menu pt-0", styles.DropdownMenu)} id="dropdown-menu" role="menu">
            <div className="dropdown-content pt-0" {...getMenuProps()}>
              {items
                .filter((item) => item.value.includes(inputValue))
                .map(({ value }, index) => (
                  <li
                    key={value}
                    className={cx(
                      { "is-success": highlightedIndex === index },
                      { "has-text-weight-bold": value === selectedItem },
                      "dropdown-item",
                      "is-white",
                      "button"
                    )}
                    {...getItemProps({
                      key: value,
                      value,
                      index,
                      item: value,
                    })}
                  >
                    {value}
                  </li>
                ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </Downshift>
);

export default Patterns;
