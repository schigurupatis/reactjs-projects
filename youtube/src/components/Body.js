import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-start gap-3 px-3 py-5 w-full">
        <SideBar className="w-3/12 px-3 py-3" />
        {/* <MainContainer />
        <Watch /> */}
        <Outlet className="w-9/12 ps-3 pe-7 py-3" />
      </div>
    </div>
  );
};

export default Body;
