import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-start gap-3">
        <div className="w-2/12 px-3 py-3">
          <SideBar />
        </div>
        <div className="w-10/12 ps-3 pe-7 py-3">
          {/* <MainContainer />
        <Watch /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
