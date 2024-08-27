import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("LogIn")

    const onlineStatus = useOnlineStatus()

    return(
        <header>
            <div className="container-fluid">
                <div className="logo-sec">
                    <Link to="/">
                        <img src={LOGO_URL} alt="" />
                        <p>Online Food Ordering App</p>
                    </Link>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contactus">ContactUs</Link></li>
                            <li><a href="#" onClick={()=> {
                                btnNameReact === "LogIn" ? setbtnNameReact("LogOut") : setbtnNameReact("LogIn")  
                            }}>{btnNameReact}</a></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/grocery">Grocery</Link></li>

                        </ul>
                    </nav>
                </div>
            </div>
    </header>
    )
}

export default Header