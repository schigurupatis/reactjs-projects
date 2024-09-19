import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlay,
  faPhotoVideo,
  faMusic,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div>
      <div className="flex flex-col border-b border-gray-300 pb-3 mb-3">
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faHome} className="min-w-5" />
          Home
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faPlay} className="min-w-5" />
          Shorts
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faPhotoVideo} className="min-w-5" />
          Subscriptions
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faMusic} />
          YouTube Music
        </div>
      </div>
      <div className="flex flex-col border-b border-gray-300 pb-3 mb-3">
        <h3>You</h3>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faUserCircle} />
          Your Channel
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faMusic} />
          History
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faMusic} />
          Playlists
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faMusic} />
          Your Videos
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faMusic} />
          Your Courses
        </div>
        <div className="flex items-center gap-3 justify-start cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
          <FontAwesomeIcon icon={faMusic} />
          Watch Later
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-gray-300 pb-3 mb-3">
        <h3>Explore</h3>
        <div>Trending</div>
        <div>Shopping</div>
        <div>Movies</div>
        <div>Live</div>
        <div>Gaming</div>
        <div>News</div>
        <div>Sports</div>
      </div>
    </div>
  );
}

export default SideBar;
