import { useState } from "react"
import { LOGO_URL } from "../utils/constants"

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("LogIn")

    return(
        <header>
            <div className="container-fluid">
                <div className="logo-sec">
                    <img src={LOGO_URL} alt="" />
                    <p>Online Food Ordering App</p>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li><a to="/">Home</a></li>
                            <li><a to="/about">About</a></li>
                            <li><a to="/contact">ContactUs</a></li>
                            <li><a href="#" onClick={()=> {
                                btnNameReact === "LogIn" ? setbtnNameReact("LogOut") : setbtnNameReact("LogIn")  
                            }}>{btnNameReact}</a></li>
                            <li><a to="/cart">Cart</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </header>
    )
}

export default Header