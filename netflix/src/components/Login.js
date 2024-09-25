import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    //console.log("singin clicked");
    setIsSignInForm(!isSignInForm);
  };

  const handleFormValidation = () => {
    // Validate form data

    //console.log("form submitted");
    // console.log(email.current.value);
    // console.log(password.current.value);

    // Validation logic based on form type (Sign In or Sign Up)
    let msg = null;

    if (isSignInForm) {
      // Validate for Sign In
      msg = checkValidData(email.current.value, password.current.value);
    } else {
      // Validate for Sign Up (includes fullname)
      msg = checkValidData(
        email.current.value,
        password.current.value,
        fullname.current.value
      );
    }

    console.log(msg);
    setErrorMessage(msg);

    // Proceed with Sign In or Sign Up if no error
    if (msg === null) {
      if (!isSignInForm) {
        console.log("Signing Up...");
        // Logic for sign up can be added here
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "" + errorMessage);
          });
      } else {
        console.log("Signing In...");
        // Logic for sign in can be added here
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "" + errorMessage);
          });
      }
    }
  };

  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
        alt="headerbg"
        className="w-full h-[100vh] object-cover bg-cover bg-center"
      />
      <div className="wrapper w-[1024px] mx-auto">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black opacity-90 p-12 rounded-md w-[400px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <h3 className="text-white text-4xl font-semibold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          {!isSignInForm && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-400 rounded-md"
                ref={fullname}
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-400 rounded-md"
              ref={email}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 text-white px-4 py-3 border border-gray-400 rounded-md"
              ref={password}
            />
            <p className="text-red-600">{errorMessage}</p>
          </div>
          <button
            className="w-full bg-red-700 text-white px-4 py-2 mt-3 rounded-md"
            onClick={handleFormValidation}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center text-white mt-5" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix" : "Already have Account"}&nbsp;
            <span className="text-red-700 font-bold cursor-pointer">
              {isSignInForm ? "SignUp" : "SignIn"}
            </span>
            &nbsp;Now
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
