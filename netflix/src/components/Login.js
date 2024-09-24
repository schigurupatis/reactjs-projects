import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
        alt="headerbg"
        className="w-full h-[90vh] object-cover"
      />
      <div className="wrapper w-[1024px] mx-auto">Login</div>
    </div>
  );
};

export default Login;
