import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const movie = nowPlayingMovies[0];

  useNowPlayingMovies();

  return (
    <>
      <div className="relative">
        <Header />
        {/*         
          VideoContainer
            - BackgroundTrailer
            - Title
          MainContainer
            - VideosList(Trending)
              - VideoCard
            - VideosList(Popular)
              - VideoCard
         */}

        <VideoContainer />
        <MainContainer />
        {/* {nowPlayingMovies && movie.title} */}
        {/* {movie.title} */}
        <Footer />
      </div>
    </>
  );
};

export default Browse;
