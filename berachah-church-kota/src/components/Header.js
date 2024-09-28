import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  console.log("User Data from Store is: ", user);

  return (
    <>
      <header className="bg-violet-800 text-white p-4">
        <div className="flex justify-between items-center w-[1024px] mx-auto">
          <div>
            <h1 className="logo">
              <Link to="/">Berachah Church</Link>
            </h1>
          </div>
          <nav className="flex justify-between items-center gap-10">
            <ul className="flex flex-start items-center gap-8">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">Aboutus</Link>
              </li>
              <li>
                <Link to="/ministries">Ministries</Link>
              </li>
              <li>
                <Link to="/branches">Branches</Link>
              </li>
              <li>
                <Link to="/contactus">Contactus</Link>
              </li>
            </ul>

            <ul className="flex flex-start items-start gap-3">
              <li>
                <Link
                  to="/login"
                  className="bg-violet-900 text-white px-5 py-2 rounded-full"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-violet-900 text-white px-5 py-2 rounded-full"
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
