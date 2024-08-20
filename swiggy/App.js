import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import About from "./src/components/About"
import ContactUs from "./src/components/ContactUs"
import Cart from "./src/components/Cart"
import Error from "./src/components/Error"

import { createBrowserRouter, RouterProvider } from "react-router-dom"




const Applayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />
  },
  {
    path: "/home",
    element: <Applayout />
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
    path: "/cart",
    element: <Cart />
  },
])


const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(<RouterProvider router={appRouter} />)