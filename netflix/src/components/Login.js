import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { LOGIN_BG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      console.log(msg);
      setErrorMessage(msg);
    } else {
      // Validate for Sign Up (includes fullname)
      msg = checkValidData(
        email.current.value,
        password.current.value,
        fullname.current.value
      );
    }

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
            updateProfile(user, {
              displayName: fullname.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                console.log(user);
                navigate("/");
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
            // console.log(user);
            // navigate("/");
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
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            console.log(user);
            navigate("/browse");
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
        src={LOGIN_BG}
        alt="headerbg"
        className="w-full h-[100vh] object-cover bg-cover bg-center"
      />
      <div className="wrapper w-[1024px] mx-auto">
        {/* {updateProfile.user.displayName && (
          <div className="flex justify-between items-center bg-green-600 text-white">
            New User {updateProfile.user.displayName} Added Successfully.
          </div>
        )} */}
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
