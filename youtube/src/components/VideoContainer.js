import React from "react";
import Video from "./Video";

function VideoContainer() {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default VideoContainer;
