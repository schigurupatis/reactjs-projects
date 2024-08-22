const User = ({name, designation, location, contact}) => {
    return(
        <div className="user-card">
            <h1>Functional Component</h1>
            <h3>Name: {name}</h3>
            <h4>Designatio: {designation}</h4>
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>
        </div>
    )
}

export default User