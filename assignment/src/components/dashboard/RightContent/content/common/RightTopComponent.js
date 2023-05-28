import React, { useState } from "react";
import { useSelector } from "react-redux";
import PopupComponent from "./PopupComponent";
function RightTopComponent({ title }) {
  const selectedUser = useSelector((state) => state.account.selectedUser);
  const name = selectedUser.name;
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <div className="right-top-content">
      <h2 className="component-heading">{title}</h2>
      <div className="profile-container" onClick={togglePopUp}>
        <img
          className="profile-picture"
          src={selectedUser.profilepicture}
          alt="profilePicture"
        />
        <div className="profile-name">{name}</div>
      </div>
      {showPopUp && <PopupComponent setShowPopUp={setShowPopUp} />}
    </div>
  );
}

export default RightTopComponent;
