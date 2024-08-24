import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.name + "Child Props",props)

       
        console.log(this.props.name + "Child Constructor")

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                bio: "default",
                company: "default"
            }
        }
    }

    async componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount")

        //API Call comes here
        const data = await fetch("https://api.github.com/users/schigurupatis");
        const json = await data.json();

        console.log(json)
        
        this.setState({
            userInfo: json
        })
    }



    
    render () {
        
        console.log(this.props.name + "Chiled Render")
        
        const { name, location, bio, company } = this.state.userInfo;

        return (
            <div className="user-card">
                <h1>Classbased Component</h1>
                <h2>Name: {name}</h2>
                <h3>Designation: {bio}</h3>
                <h5>Location: {location}</h5>
                <h5>Company: {company}</h5>
            </div>
        )
    }
}

export default UserClass