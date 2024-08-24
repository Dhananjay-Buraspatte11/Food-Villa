import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dammy Name",
                Location: "Dammy Location"
            }
        }
        console.log("Child COnstructor "+this.props.name);
    }
    async componentDidMount() {
        //Best Place to make an API Call
        const data = await fetch("https://api.github.com/users/Dhananjay-Buraspatte11")
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json.name);
    }
    render(){
        const {count,count1}=this.state
        console.log("Child Render "+this.props.name);
        return(
            <div>
            <img src={this.state.userInfo.avatar_url} alt="" />
                <h1>Name: {this.state.userInfo.name}</h1>
                <h2>following: {this.state.userInfo.following}</h2>
               </div>
        )
    }
}
export default Profile;

