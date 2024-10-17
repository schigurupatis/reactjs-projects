import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { json } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {

  const dispatch = useDispatch()
  // const [trailerId, setTrailerId] = useState(null)

  
  //Fetch trailer video
  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/933260/videos?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data)

    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];

    console.log(trailer)
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideo(trailer))
  }
  
  useEffect(()=> {
    getMovieVideos();
  }, [])

  return (
    <div>
      <iframe width="100%" height="100vh" src={"https://www.youtube.com/embed/"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
  )
}

export default VideoBackground