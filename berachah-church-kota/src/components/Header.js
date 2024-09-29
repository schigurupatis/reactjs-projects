import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log("User Data from Store is: ", user);

  // Logout handler
  const handleLogout = () => {
    dispatch(logout()); // Clear user data in Redux store
    navigate("/home"); // Redirect to login page
  };

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
              {user ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-5 py-2 rounded-full"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
