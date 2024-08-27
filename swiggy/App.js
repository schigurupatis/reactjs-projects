import React, { lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import About from "./src/components/About"
import ContactUs from "./src/components/ContactUs"
import Cart from "./src/components/Cart"
import Error from "./src/components/Error"
import RestaurantMenu from "./src/components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Shimmer from "./src/components/Shimmer"
//import Grocery from "./src/components/Grocery"


const Grocery = lazy(() => import("./src/components/Grocery"))

const Applayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/home",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  },
])


const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(<RouterProvider router={appRouter} />)