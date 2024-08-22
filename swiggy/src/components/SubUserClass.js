import React from 'react'

class SubUserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("SubUserClass Child Props",props)

        this.state = {
            count: 1,
        }

        console.log("SubUserClass Child Constructor")
    }

    componentDidMount() {
        console.log("SubUserClass Child Component Did Mount")
    }

    render () {
        const {name, designation, location, contact} = this.props;

        console.log("SubUserClass Chiled Render")

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
            </div>
        )
    }
}

export default SubUserClass