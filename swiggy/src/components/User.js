import { useState, useEffect } from "react"
import { json } from "react-router-dom";

const User = () => {

    //const [count1, setCount1] = useState(1);
    const [userData, setUserData] = useState(""); // Initialize state for user data


    useEffect(()=> {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const data = await fetch("https://api.github.com/users/schigurupatis");
        const json = await data.json();
        console.log("json data is: ", json)
        console.log(json.name, json.bio)

        setUserData(json); // Update state with fetched data
    }
    
    
    const {name, bio, company, public_repos, created_at, login} = userData
    return(
        <div className="user-card">
            <h1>Functional Component</h1>
            <br />
            <h3></h3>
            <h3>Name: {name}</h3>
            <h4>Designatio: {created_at}</h4>
            <h2>Location: {login}</h2>
            <h3>Contact: {public_repos}</h3>
        </div>
    )
}

export default User