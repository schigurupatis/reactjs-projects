import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const UserProfile = () => {
  const {
    loggedInUser,
    loggedInUserPhone,
    loggedInUserEmail,
    setUserName,
    setUserPhone,
    setUserEmail,
  } = useContext(UserContext);

  const [passwordType, setPasswordType] = useState("password");
  const [cPasswordType, setCPasswordType] = useState("password");

  const handlePasswordIcon = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleCPasswordIcon = () => {
    setCPasswordType(cPasswordType === "password" ? "text" : "password");
  };

  const [profileUpdateSec, setProfileUpdateSec] = useState(false);

  const handleProfileEdit = () => {
    //console.log("clicked");
    setProfileUpdateSec(!profileUpdateSec);
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

        {/* Edit profile section starts*/}
        <div
          id="profile-edit"
          className="bg-white p-5 my-7 text-black"
          style={{ display: profileUpdateSec ? "block" : "none" }}
        >
          <h1 className="font-bold text-orange-500 text-lg mb-5">
            Edit Your Profile
          </h1>
          <form className="flex justify-start flex-wrap gap-2">
            <div className="flex justify-start flex-col mb-4">
              <label htmlFor="phone" className="mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Edit Phone Number"
                value={loggedInUserPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="border bg-slate-200 px-3 py-2 rounded-md outline-none"
              />
            </div>
            <div className="flex justify-start flex-col mb-4">
              <label htmlFor="name" className="mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Edit Name"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
                className="border bg-slate-200 px-3 py-2 rounded-md outline-none"
              />
            </div>
            <div className="flex justify-start flex-col mb-4">
              <label htmlFor="email" className="mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Edit Email"
                value={loggedInUserEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
            <div className="flex justify-start flex-col mb-4 relative">
              <label htmlFor="c-password" className="mb-1 font-medium">
                Confirm Password
              </label>
              <input
                type={cPasswordType}
                id="c-password"
                placeholder="Edit Confirm Password"
                className="border bg-slate-200 px-3 py-2 rounded-md outline-none"
              />
              <FontAwesomeIcon
                icon={cPasswordType === "password" ? faEye : faEyeSlash}
                className="absolute top-10 right-2 cursor-pointer"
                onClick={handleCPasswordIcon}
              />
            </div>
            <div className="flex justify-end mb-4 mt-7 gap-3">
              <button
                type="submit"
                className="btn bg-orange-500 px-3 py-2 rounded-md text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        {/* Edit profile section ends*/}

        <div className="mt-10">
          <div className="bg-white flex justify-start gap-4">
            <div>
              <ul className="bg-orange-500 p-5 w-[200px] mb-14 min-h-full">
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
            <div className="p-4 text-black">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias corrupti, aut ad maiores earum id nihil, officiis,
                quaerat magni dolore voluptatem sit? Beatae, nulla illum optio
                at ab saepe, esse omnis sed et facere officiis natus consectetur
                officia vero perspiciatis eligendi est ipsa rerum blanditiis
                vitae commodi id distinctio quia voluptatum. Quae at voluptates
                debitis vero quisquam perferendis molestiae repudiandae natus,
                nobis deserunt, doloribus quam distinctio. Quasi officia, natus
                voluptatum eaque labore pariatur animi magni itaque enim nemo!
                Voluptatibus alias eius recusandae doloribus dolore obcaecati
                hic autem et voluptas, id nemo repellendus voluptates? Corrupti
                tempora quo in corporis dolorum vitae!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias corrupti, aut ad maiores earum id nihil, officiis,
                quaerat magni dolore voluptatem sit? Beatae, nulla illum optio
                at ab saepe, esse omnis sed et facere officiis natus consectetur
                officia vero perspiciatis eligendi est ipsa rerum blanditiis
                vitae commodi id distinctio quia voluptatum. Quae at voluptates
                debitis vero quisquam perferendis molestiae repudiandae natus,
                nobis deserunt, doloribus quam distinctio. Quasi officia, natus
                voluptatum eaque labore pariatur animi magni itaque enim nemo!
                Voluptatibus alias eius recusandae doloribus dolore obcaecati
                hic autem et voluptas, id nemo repellendus voluptates? Corrupti
                tempora quo in corporis dolorum vitae!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias corrupti, aut ad maiores earum id nihil, officiis,
                quaerat magni dolore voluptatem sit? Beatae, nulla illum optio
                at ab saepe, esse omnis sed et facere officiis natus consectetur
                officia vero perspiciatis eligendi est ipsa rerum blanditiis
                vitae commodi id distinctio quia voluptatum. Quae at voluptates
                debitis vero quisquam perferendis molestiae repudiandae natus,
                nobis deserunt, doloribus quam distinctio. Quasi officia, natus
                voluptatum eaque labore pariatur animi magni itaque enim nemo!
                Voluptatibus alias eius recusandae doloribus dolore obcaecati
                hic autem et voluptas, id nemo repellendus voluptates? Corrupti
                tempora quo in corporis dolorum vitae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
