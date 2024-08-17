import React from "react"
import ReactDOM from "react-dom"

const parent = React.createElement("h1", {}, "this is from app.js")

//console.log(parent)

const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(parent)