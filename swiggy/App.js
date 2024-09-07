import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
//import Grocery from "./src/components/Grocery"
import UserContext from "./src/utils/UserContext";
import UserProfile from "./src/components/UserProfile";
import Registration from "./src/components/Registration";
import Login from "./src/components/Login";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const Grocery = lazy(() => import("./src/components/Grocery"));

const Applayout = () => {
  const [userName, setUserName] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    const data = {
      name: "Santha Kumar",
      phone: "9392441426",
      email: "schigurupatis@gmail.com",
    };
    setUserName(data.name);
    setUserPhone(data.phone);
    setUserEmail(data.email);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          loggedInUserPhone: userPhone,
          loggedInUserEmail: userEmail,
          setUserName,
          setUserPhone,
          setUserEmail,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(<RouterProvider router={appRouter} />);
