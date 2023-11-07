import React from "react";
import Header from "./UserHeader";
const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default UserLayout;
