import React, { lazy } from "react";
import AppBar from "../../components/AppBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
