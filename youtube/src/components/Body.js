import React from "react";
import VideoContainer from "./VideoContainer";
import Buttons from "./Buttons";
import SideBar from "./SideBar";

function Body() {
  return (
    <div className="flex justify-start gap-3">
      <div className="w-2/12">
        <SideBar />
      </div>
      <div className="w-10/12">
        <Buttons />
        <VideoContainer />
      </div>
    </div>
  );
}

export default Body;
