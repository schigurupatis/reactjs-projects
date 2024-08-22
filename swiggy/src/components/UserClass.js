import React from 'react'
import SubUserClass from './SubUserClass'

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.name + "Child Props",props)

        this.state = {
            count: 1,
        }

        console.log(this.props.name + "Child Constructor")
    }

    componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount")
    }

    render () {
        const {name, designation, location, contact} = this.props;

        console.log(this.props.name + "Chiled Render")

        return (
            <div className="user-card">
                <h1>Classbased Component</h1>
                <br />
                    <h1>Count1 is: {this.state.count}</h1>
                <br />
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count Increment</button>
                <h3>Name: {name}</h3>
                <h4>Designatio: {designation}</h4>
                <h2>Location: {location}</h2>
                <h3>Contact: {contact}</h3>
                <SubUserClass />
            </div>
        )
    }
}

export default UserClass