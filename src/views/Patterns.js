import React from "react";

const MyComponent = (props) => (
  <div>
    <p>MyComponent</p>
    {props.render("Iks De")}
  </div>
);

const Patterns = () => (
  <div>
    <p>Patterns</p>
    <MyComponent render={(data) => <p>Siema {data}</p>} />
  </div>
);

export default Patterns;
