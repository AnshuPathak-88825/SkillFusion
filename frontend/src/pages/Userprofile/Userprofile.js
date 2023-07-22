import React from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
const UserProfile=()=>{
    const location=useLocation();
    const userinfo=location.state;
    console.log(userinfo);
    return (
        <div>UserProfile</div>
        )
}
export default UserProfile;