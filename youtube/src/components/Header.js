import React from "react";
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

function Header() {
  return (
    <header className="shadow-lg px-7 py-2">
      <nav className="flex justify-between items-center">
        <div className="logo-sec flex gap-5 items-center w-2/12">
          <FontAwesomeIcon icon={faBars} />
          <img src={logo} alt="YouTube" className="w-24" />
        </div>
        <div className="search-sec w-8/12">
          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              placeholder="Search"
              className="border-gray-300 border px-5 py-2 rounded-l-full outline-none focus:border-blue-500 active:border-blue-500 focus:shadow-inner w-[500px]"
            />
            <button className="border-gray-300 border px-5 py-2 rounded-r-full">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </button>
          </div>
        </div>
        <div className="user-sec w-2/12 flex justify-center items-center">
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faVideoCamera} className="w-8" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faBell} className="w-8" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUser} className="w-8" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
