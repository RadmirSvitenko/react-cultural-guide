import Header from "components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayouts;
