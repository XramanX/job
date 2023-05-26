import React from "react";
import { useSelector } from "react-redux";
function BottonLeftComponent() {
  const selectedUser = useSelector((state) => state.account.selectedUser);
  return (
    <div className="profile-bottom-left">
      <img
        className="big-profile-picture"
        src={selectedUser.profilepicture}
        alt="profilePicture"
      />
      <div className="name">{selectedUser.name}</div>
    </div>
  );
}

export default BottonLeftComponent;
