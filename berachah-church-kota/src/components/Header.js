import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-violet-800 text-white flex justify-between items-center p-3">
        <div>
          <h1 className="logo">Berachah Church</h1>
        </div>
        <nav className="">
          <ul className="flex flex-start items-start gap-3">
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
              <a>Login</a>
            </li>
            <li>
              <a>Register</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
