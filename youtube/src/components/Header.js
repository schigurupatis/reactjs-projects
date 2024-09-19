import React from "react";
import { logo } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faVideoCamera,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="shadow-lg px-7 py-4">
      <nav className="flex justify-between items-center">
        <div className="logo-sec flex gap-5 items-center">
          <FontAwesomeIcon icon={faBars} />
          <img src={logo} alt="YouTube" className="w-24" />
        </div>
        <div className="search-sec">
          <input type="text" placeholder="Search" className="search-box" />
        </div>
        <div className="user-sec">
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faVideoCamera} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
