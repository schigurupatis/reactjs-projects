import React from "react";
import VideoContainer from "./VideoContainer";
import Buttons from "./Buttons";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex justify-start gap-3">
      <div className="w-2/12 px-3 py-3">
        <SideBar />
      </div>
      <div className="w-10/12 ps-3 pe-7 py-3">
        <Buttons />
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;
