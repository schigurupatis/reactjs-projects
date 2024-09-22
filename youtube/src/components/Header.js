import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faVideoCamera,
  faBell,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setMenuOpen } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setMenuOpen());
  };

  const [searchquery, setSearchQuery] = useState("");
  //console.log(searchquery);

  useEffect(() => {
    //console.log("searchquery is", searchquery);
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => clearTimeout(timer);
  }, [searchquery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    console.log("Search Suggestions: ", json[1]);
  };

  return (
    <header className="shadow-md px-7 py-2">
      <nav className="flex justify-between items-center">
        <div className="logo-sec flex gap-5 items-center w-2/12">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => handleToggle()}
            className="cursor-pointer"
          />
          <Link to="/">
            <img src={logo} alt="YouTube" className="w-24" />
          </Link>
        </div>
        <div className="search-sec w-8/12">
          <div className="">
            <div className="w-full flex justify-center items-center">
              <input
                type="text"
                placeholder="Search"
                className="border-gray-300 border px-5 py-2 rounded-l-full outline-none focus:border-blue-500 active:border-blue-500 focus:shadow-inner w-[500px]"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="border-gray-300 border px-5 py-2 rounded-r-full">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </button>
            </div>
            <div className="w-full flex justify-center items-center relative">
              <ul className="w-[560px] absolute top-0  bg-white py-5  border border-gray-200 rounded-xl">
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-1">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-400 mr-3"
                  />
                  Search Suggestions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="user-sec w-2/12 flex justify-center items-center">
          <ul className="flex justify-between items-center gap-5">
            <li>
              <FontAwesomeIcon icon={faVideoCamera} className="w-8" />
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} className="w-8" />
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} className="w-8" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
