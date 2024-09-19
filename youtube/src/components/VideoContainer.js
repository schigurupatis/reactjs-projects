import React, { useEffect } from "react";
import Video from "./Video";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

function VideoContainer() {
  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
  };

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
