import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
        alt="headerbg"
        className="w-full h-[100vh] object-cover bg-cover bg-center"
      />
      <div className="wrapper w-[1024px] mx-auto">
        <form className="bg-black opacity-90 p-12 rounded-md w-[400px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-white text-4xl font-semibold mb-8">Sign In</h3>
          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full bg-gray-700 text-white px-4 py-3 border border-gray-400 rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-700 text-white px-4 py-3 border border-gray-400 rounded-md mb-4"
          />
          <button className="w-full bg-red-700 text-white px-4 py-2 mt-3 rounded-md">
            Sign In
          </button>
          <p className="text-center text-white mt-5">
            New to Netflix{" "}
            <a href="#" className="text-red-700 font-bold">
              SignUp
            </a>
            &nbsp;Now
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
