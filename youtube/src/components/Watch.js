import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMenuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/constants";

const Watch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuClose());
  }, []);

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const videoID = searchParams.get("v");

  //geting specific video id from url and displaying
  useEffect(() => {
    getSpecificVideo();
  }, [videoID]);

  const [specificVideo, setSpecificVideo] = useState({});
  const getSpecificVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    //console.log(json.items[0].snippet);
    setSpecificVideo(json.items[0]);
  };

  console.log(specificVideo);

  const title = specificVideo?.snippet?.title;
  //const channelTitle = specificVideo?.snippet?.channelTitle;
  const channelId = specificVideo?.snippet?.channelId;
  const thumbnails = specificVideo?.snippet?.thumbnails?.standard.url;
  const statistics = specificVideo?.statistics;
  const viewCount = statistics?.viewCount;
  const likeCount = statistics?.likeCount;

  //getting specific channel id from url and displaying chanel data
  useEffect(() => {
    getSpecificChannel();
  }, [channelId]);

  const [specificChannel, setSpecificChannel] = useState({});

  const getSpecificChannel = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    //console.log(json.items[0]);
    setSpecificChannel(json.items[0]);
  };

  console.log(specificChannel);

  const channelThumbnails = specificChannel?.snippet?.thumbnails?.default.url;
  const channelTitle = specificChannel?.snippet?.title;
  const channelSubscribers = specificChannel?.statistics?.subscriberCount;

  return (
    <div className="flex justify-start items-start gap-3">
      <div className="">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoID}`}
          title={title}
          allowFullScreen
          className="rounded-xl"
        ></iframe>
        <h1 className="text-xl font-bold my-3">{title}</h1>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div>
              <img
                src={channelThumbnails}
                alt={title}
                className="rounded-full w-10 h-10"
              />
            </div>
            <div>
              <p>{channelTitle}</p>
            </div>
            <div>
              <p>{channelSubscribers} Subscribers</p>
            </div>
          </div>
          <div className="flex justify-between items-start gap-3">
            <button>{Math.round((likeCount / 1000) * 100) / 100}K Likes</button>
            <button>Dislike</button>
          </div>
        </div>
        <div className="bg-slate-200 rounded-lg p-3 mt-3">
          <button>{viewCount}</button>
        </div>
      </div>
      <div className="">
        <h6>Sidebar</h6>
      </div>
    </div>
  );
};

export default Watch;
