import React from "react";
import ReactDOM from "react-dom";
import "./ProfileHeader.css";
const ProfileHeader = () => {
  return (
    <div className="header">
      <div className="left">
        <img src="" alt="he" id="image" className="ldiv"></img>
        <div className="ldiv" id="username">
          AnshuPathak-88825
        </div>
      </div>
      <div className="right">
        <div id="search">
          <form onsubmit="event.preventDefault();" role="search">
            <input
              id="search"
              type="search"
              placeholder="Search..."
              autofocus
              required
            />
            <button
              type="submit"
              className="button-6"
              id="search"
              role="button"
            >
              Search
            </button>
          </form>
        </div>
        <div id="create-team">
          <button class="button-6" role="button">
            Create Team
          </button>
        </div>
        <div id="user-profile">
          <img src="" alt="he" id="image" className="ldiv"/>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
