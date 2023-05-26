import React from "react";
import { useSelector } from "react-redux";
function RightTopComponent({ title }) {
  const selectedUser = useSelector((state) => state.account.selectedUser);
  const name = selectedUser.name;
  return (
    <>
      <h2 className="component-heading">{title}</h2>
      <div className="profile-container">
        <div className="profile-container">
          <img
            className="profile-picture"
            src={selectedUser.profilepicture}
            alt="profilePicture"
          />
          <div className="profile-name">{name}</div>
        </div>
      </div>
    </>
  );
}

export default RightTopComponent;
