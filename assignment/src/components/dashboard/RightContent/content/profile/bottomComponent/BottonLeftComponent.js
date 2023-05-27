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
      <div className="user-details">
        <div className="info-div">
          <div className="title">Username</div>
          <span className="title-span">{selectedUser.username}</span>
        </div>
        <div className="info-div">
          <div className="title">e-mail</div>
          <span className="title-span">{selectedUser.email}</span>
        </div>
        <div className="info-div">
          <div className="title">Phone</div>
          <span className="title-span">{selectedUser.phone}</span>
        </div>
        <div className="info-div">
          <div className="title">Website</div>
          <span className="title-span">{selectedUser.website}</span>
        </div>
      </div>
    </div>
  );
}

export default BottonLeftComponent;
