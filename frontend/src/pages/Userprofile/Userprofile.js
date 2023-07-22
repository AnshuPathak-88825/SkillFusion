import React from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
const UserProfile = () => {
  const location = useLocation();
  const userinfo = location.state;
  console.log(userinfo);
  return (
    <div className="container">
      <ProfileHeader />
    </div>
  );
};
export default UserProfile;
