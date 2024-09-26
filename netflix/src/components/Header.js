import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isUserSignedIn, setisUserSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        console.log(uid, email, displayName);
        setisUserSignedIn(true);
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        setisUserSignedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignInSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <header className="absolute w-full bg-gradient-to-b from-black h-[120px]">
      <div className="container w-[1024px] mx-auto h-24 flex justify-between items-center">
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="w-36 h-10 object-contain"
          />
        </a>
        <div className="flex justify-end items-center gap-3">
          <form>
            <select className="bg-gray-800 text-white px-4 py-1 rounded-md cursor-pointer">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </form>
          <button
            className="bg-red-600 text-white px-4 py-1 rounded-md"
            onClick={handleSignInSignOut}
          >
            {/* {isSignInTrue ? "Sign Up" : "Sign In"} */}
            {/* if(user) {"Sign Out"} else {"Sign In"} */}
            {isUserSignedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
