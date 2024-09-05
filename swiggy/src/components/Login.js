import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [cPasswordType, setCPasswordType] = useState("password");

  const handlePasswordIcon = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleCPasswordIcon = () => {
    setCPasswordType(cPasswordType === "password" ? "text" : "password");
  };

  return (
    <div>
      <div className="container w-[500px] mx-auto my-10  min-h-screen">
        <div className="flex justify-start flex-col my-8">
          <h1 className="text-2xl font-bold text-slate-900 my-2">Sign in</h1>
          <p>
            <span>
              or{" "}
              <Link to="/registration" className="text-orange-500">
                create your account
              </Link>
            </span>
          </p>
        </div>
        <form>
          <div className="flex justify-start flex-col mb-4">
            <label htmlFor="phone" className="mb-1 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Edit Phone Number"
              className="border bg-slate-200 px-3 py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-start flex-col mb-4 relative">
            <label htmlFor="password" className="mb-1 font-medium">
              Password
            </label>
            <input
              type={passwordType}
              id="password"
              placeholder="Edit Password"
              className="border bg-slate-200 px-3 py-2 rounded-md outline-none"
            />
            <FontAwesomeIcon
              icon={passwordType === "password" ? faEye : faEyeSlash}
              className="absolute top-10 right-2 cursor-pointer"
              onClick={handlePasswordIcon}
            />
          </div>
          <div className="flex justify-end mb-4 mt-7 gap-3">
            <button
              type="submit"
              className="btn bg-orange-500 px-3 py-2 rounded-md text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;