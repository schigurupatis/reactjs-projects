import React from "react";

const Header = () => {
  return (
    <header className="absolute w-full bg-gradient-to-b from-black">
      <div className="container w-[1024px] mx-auto h-24 flex justify-between items-center">
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="w-36 h-10 object-contain"
          />
        </a>
        <div className="flex justify-end items-center gap-3">
          <form>
            <select className="bg-gray-800 text-white px-4 py-1 rounded-md cursor-pointer">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </form>
          <button className="bg-red-600 text-white px-4 py-1 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
