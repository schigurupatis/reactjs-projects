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
                company: "default",
                avatar_url: "dummy"
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


    componentDidUpdate() {
        console.log("Child Component Did updated")
    }

    componentWillUnmount() {
        console.log("Child Component Will Unmount")
    }


    
    render () {
        
        console.log(this.props.name + "Child Component Render")
        
        const { name, location, bio, company, avatar_url
        } = this.state.userInfo;
        //debugger;
        return (
            <div className="user-card">
                <h1>Classbased Component</h1>
                <h2>Name: {name}</h2>
                <h3>Designation: {bio}</h3>
                <h5>Location: {location}</h5>
                <h5>Company: {company}</h5>
                <div>
                    <img src={avatar_url} className='avatar' />
                </div>
            </div>
        )
    }
}

export default UserClass