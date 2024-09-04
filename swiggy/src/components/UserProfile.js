import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useContext } from "react"
import UserContext from "../utils/UserContext"


const UserProfile = () => {

    const {loggedInUser, loggedInUserPhone, loggedInUserEmail} = useContext(UserContext);

    const [passwordType, setPasswordType] = useState("password");
    const [cPasswordType, setCPasswordType] = useState("password");

    const handlePasswordIcon = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };

    const handleCPasswordIcon = () => {
        setCPasswordType(cPasswordType === "password" ? "text" : "password");
    };


    return <div className="text-white" style={{backgroundColor: "#37718e"}}>
        <div className="container w-[1200px] mx-auto py-10">
            <div className="flex justify-between items-center">
                <div className="profile">
                    <h1 className="text-2xl font-bold">{loggedInUser}</h1>
                    <span>{loggedInUserPhone}</span> <span>{loggedInUserEmail}</span> 
                </div>
                <div>
                    <button type="submit" className="border border-white font-normal px-6 py-2 hover:bg-white hover:text-black">Edit Profile</button>
                </div>
            </div>
            <div className="mt-10">
                <div className="bg-white">
                    <ul className="bg-orange-500 p-5 w-[200px] mb-14">
                        <li className=" text-lg font-bold px-3 py-2 cursor-pointer">Orders</li>
                        <li className=" text-lg font-bold px-3 py-2 cursor-pointer">Favourties</li>
                        <li className=" text-lg font-bold px-3 py-2 cursor-pointer">Payments</li>
                        <li className=" text-lg font-bold px-3 py-2 cursor-pointer">Address</li>
                        <li className=" text-lg font-bold px-3 py-2 cursor-pointer">Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default UserProfile