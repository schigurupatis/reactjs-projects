import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-violet-800 text-white p-3">
        <div className="flex justify-between items-center w-[1024px] mx-auto">
          <div>
            <h1 className="logo">Berachah Church</h1>
          </div>
          <nav className="flex justify-between items-center gap-10">
            <ul className="flex flex-start items-center gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Worships</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contactus</a>
              </li>
            </ul>

            <ul className="flex flex-start items-start gap-3">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
