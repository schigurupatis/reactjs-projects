import { createContext } from "react";


const UserContext = createContext({
    loggedInUser: "Default User",
    loggedInUserPhone: "0987654321",
    loggedInUserEmail: "test@gmail.com",
})

export default UserContext;