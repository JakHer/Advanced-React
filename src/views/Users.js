import React from "react";

const MyContext = React.createContext();

const Users = () => (
  <MyContext.Provider value={{ name: "Kuba" }}>
    <p>Users</p>
    <User />
  </MyContext.Provider>
);

const User = () => {
  const context = React.useContext(MyContext);
  return (
    <div>
      <p>User Name: {context.name}</p>
    </div>
  );
};

export default Users;
