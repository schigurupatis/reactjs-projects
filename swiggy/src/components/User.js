import { useState } from "react"

const User = ({name, designation, location, contact}) => {

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(2);

    return(
        <div className="user-card">
            <h1>Functional Component</h1>
            <br />
            <h1>Count1 is: {count1}</h1>
            <br />
            <h1>Count2 is: {count2}</h1>
            <br />
            <h3>Name: {name}</h3>
            <h4>Designatio: {designation}</h4>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
        </div>
    )
}

export default User