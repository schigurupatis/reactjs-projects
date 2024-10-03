import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    return unsubscribe();
  }, []);

  const handleSignInSignOut = () => {
    //console.log(user.email.current.value);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
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
        <Link to="/">
          <img src={logo} alt="Netflix" className="w-36 h-10 object-contain" />
        </Link>
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
