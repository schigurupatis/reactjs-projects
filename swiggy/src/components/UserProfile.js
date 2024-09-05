import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const UserProfile = () => {
  const { loggedInUser, loggedInUserPhone, loggedInUserEmail } =
    useContext(UserContext);

  const [userName, setUserName] = useState();

  const handleProfileEdit = () => {
    console.log("clicked");
  };

  return (
    <div className="text-white" style={{ backgroundColor: "#37718e" }}>
      <div className="container w-[1200px] mx-auto py-10">
        <div className="flex justify-between items-center">
          <div className="profile">
            <h1 className="text-2xl font-bold">{loggedInUser}</h1>
            <span>{loggedInUserPhone}</span>
            <span className="mx-3 relative">
              <FontAwesomeIcon
                icon={faCircle}
                className="w-1 h-1 absolute top-3 left-0"
              />
            </span>
            <span>{loggedInUserEmail}</span>
          </div>
          <div>
            <button
              type="button"
              className="border border-white font-normal px-6 py-2 hover:bg-white hover:text-black"
              onClick={handleProfileEdit}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-white">
            <ul className="bg-orange-500 p-5 w-[200px] mb-14">
              <li className=" text-lg font-bold px-3 py-2 cursor-pointer">
                Orders
              </li>
              <li className=" text-lg font-bold px-3 py-2 cursor-pointer">
                Favourties
              </li>
              <li className=" text-lg font-bold px-3 py-2 cursor-pointer">
                Payments
              </li>
              <li className=" text-lg font-bold px-3 py-2 cursor-pointer">
                Address
              </li>
              <li className=" text-lg font-bold px-3 py-2 cursor-pointer">
                Settings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
