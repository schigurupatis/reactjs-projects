import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        console.log(uid, email, displayName);
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignInSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
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
          {user?.email ? (
            <div className="flex justify-start items-start gap-3">
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span>Welcome, {user?.displayName || "User"}</span>
            </div>
          ) : (
            <>
              <form>
                <select className="bg-gray-800 text-white px-4 py-1 rounded-md cursor-pointer">
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </form>
            </>
          )}
          <button
            className="bg-red-600 text-white px-4 py-1 rounded-md"
            onClick={handleSignInSignOut}
          >
            {user?.email ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
