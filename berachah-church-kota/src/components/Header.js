import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-violet-800 text-white p-4">
        <div className="flex justify-between items-center w-[1024px] mx-auto">
          <div>
            <h1 className="logo">Berachah Church</h1>
          </div>
          <nav className="flex justify-between items-center gap-10">
            <ul className="flex flex-start items-center gap-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Aboutus</a>
              </li>
              <li>
                <a href="#">Ministries</a>
              </li>
              <li>
                <a href="#">Branches</a>
              </li>
              <li>
                <a href="#">Contactus</a>
              </li>
            </ul>

            <ul className="flex flex-start items-start gap-3">
              <li>
                <a
                  href="#"
                  className="bg-violet-900 text-white px-5 py-2 rounded-full"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-violet-900 text-white px-5 py-2 rounded-full"
                >
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
