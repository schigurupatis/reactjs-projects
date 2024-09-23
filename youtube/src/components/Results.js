import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/constants";

const Results = () => {
  const [videos, setVideos] = useState([]);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_query");

  useEffect(() => {
    if (searchQuery) {
      getSelectedSearchSuggestionVideos(searchQuery);
    }
  }, [searchQuery]);

  const getSelectedSearchSuggestionVideos = async () => {
    const data = await fetch(
      `GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div>
      <h1 className="my-3">
        Results for the "<span className="font-bold">{searchQuery}</span>"
      </h1>
      <div>
        {/* Render the list of videos */}
        {videos.length > 0 ? (
          <ul>
            {videos.map((video) => (
              <li key={video.id.videoId}>
                <h3>{video.snippet.title}</h3>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
