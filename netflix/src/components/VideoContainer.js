import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const VideoContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies)

  const mainMovie = movies[0];
  console.log("Main Movie is: ", mainMovie)

  return (
  <div>
    <VideoTitle />
    <VideoBackground />
  </div>
  );
};

export default VideoContainer;
