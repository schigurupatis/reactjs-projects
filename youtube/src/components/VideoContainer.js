import React, { useEffect, useState } from "react";
import Video from "./Video";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json.items);
    setVideos(json.items);
  };

  //console.log(videos[0]);

  return (
    <div className="flex flex-wrap justify-start items-top gap-4">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          {/* <Link to="/watch" key={video.id}> */}
          <Video info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
