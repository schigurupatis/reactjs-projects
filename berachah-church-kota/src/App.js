import React from "react";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Aboutus from "./components/Aboutus";
import Ministries from "./components/Ministries";
import Branches from "./components/Branches";
import Contactus from "./components/Contactus";
import Error from "./components/Error";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true, // This specifies that this is the default route
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/aboutus",
          element: <Aboutus />,
        },
        {
          path: "/ministries",
          element: <Ministries />,
        },
        {
          path: "/branches",
          element: <Branches />,
        },
        {
          path: "/contactus",
          element: <Contactus />,
        },
        {
          path: "/*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
