import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import Profiles from "./Profile";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);

    }
   
    render() {
        return (
            <div>
                <h1>This is About Page</h1>
                {/* <Outlet/> */}
                <Profile name={"First Child"} />
               </div>
        )
    }
}
export default About;