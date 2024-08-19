import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"




const Applayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(<Applayout />)