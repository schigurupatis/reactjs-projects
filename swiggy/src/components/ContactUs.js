import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="container w-[500px] mx-auto my-10">
        <div className="flex justify-start flex-col my-8">
          <h1 className="text-2xl font-bold text-slate-900 my-2">
            Send Us a Message
          </h1>
        </div>
        <form>
          <div className="flex justify-start flex-col mb-4">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="border bg-slate-200 px-3 py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-start flex-col mb-4">
            <label htmlFor="phone" className="mb-1 font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone"
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
              placeholder="Enter Email"
              className="border bg-slate-200 px-3 py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-start flex-col mb-4">
            <label htmlFor="message" className="mb-1 font-medium">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              placeholder="Enter Message"
              className="border
              bg-slate-200 px-3 py-2 rounded-md outline-none"
            />
          </div>

          <div className="flex justify-end mb-4 mt-7 gap-3">
            <button
              type="submit"
              className="btn bg-orange-500 px-3 py-2 rounded-md text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
