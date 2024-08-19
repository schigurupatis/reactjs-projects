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
                            <li><a href="#">Swiggy Corporate</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#" onClick={()=> {
                                btnNameReact === "LogIn" ? setbtnNameReact("LogOut") : setbtnNameReact("LogIn")  
                            }}>{btnNameReact}</a></li>
                            <li><a href="#">Cart</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </header>
    )
}

export default Header