import React from "react";
import { thumbnail } from "../utils/constants";

function Video() {
  return (
    <div className="my-5">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-[343px] h-[193px] rounded-xl"
      />
      <div className="flex justify-between items-top gap-1 w-full mt-3">
        <div className="w-2/12">
          <img src={thumbnail} alt="avatar" className="w-9 h-9 rounded-full" />
        </div>
        <div className="flex flex-col w-9/12">
          <h1 className="font-bold">Title</h1>
          <h5 className="text-gray-500">Channel Name</h5>
          <h6 className="text-gray-500">
            <span className="mr-4">Views</span>
            <span>Time</span>
          </h6>
        </div>
        <div className="w-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Video;
