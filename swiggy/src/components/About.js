import User from "./User"
import UserClass from "./UserClass"
import React from "react"

// const About = () => {
//     return (
//         <div>
//             <div className="main-content">
//                 <div className="container p-20">
//                         <h1 className="mb-1">About Us</h1>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//                         <br />
//                         <User name={"Santha Kumar Chigurpati"} designation={"UI/UX Engineer"} location={"Hyderabad"} contact={"@schigurupatis"} />
//                         <br />
//                         <UserClass name={"Santha Kumar Chigurpati"} designation={"UI/UX Engineer"} location={"Hyderabad"} contact={"@schigurupatis"} />
//                 </div>
//             </div>
//         </div>
//     )
// }

class About extends React.Component {
    constructor(props) {
        super(props) 
        console.log("Parent Props", props)
        
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent Component Did Mount")
    }

    render() {
        console.log("Parent Render")
        return(
            <div>
             <div className="main-content">
                 <div className="container p-20">
                         <h1 className="mb-1">About Us</h1>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                         <br />
                         <User name={"Santha Kumar Chigurpati"} designation={"UI/UX Engineer"} location={"Hyderabad"} contact={"@schigurupatis"} />
                         {/* <br />
                         <UserClass name={"Santha Kumar Chigurpati"} designation={"UI/UX Engineer"} location={"Hyderabad"} contact={"@schigurupatis"} /> */}
                        
                 </div>
             </div>
        </div>
        )
    }
}

export default About