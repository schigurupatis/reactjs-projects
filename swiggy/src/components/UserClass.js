import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        //console.log(props)

        this.state = {
            count1: 1,
            count2: 2,
        }
    }

    render () {
        const {name, designation, location, contact} = this.props;
        return (
            <div className="user-card">
                <h1>Classbased Component</h1>
                <br />
                    <h1>Count1 is: {this.state.count1}</h1>
                <br />
                    <h1>Count2 is: {this.state.count2}</h1>
                <br />
                <h3>Name: {name}</h3>
                <h4>Designatio: {designation}</h4>
                <h2>Location: {location}</h2>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default UserClass