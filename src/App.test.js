import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("Renders without Crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  const appDiv = document.querySelector(".App");
  expect(appDiv.innerHTML).toContain("Users");

  ReactDOM.unmountComponentAtNode(div);
});
