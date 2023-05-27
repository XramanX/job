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
        <div className="info-div website-div">
          <div className="title">Website</div>
          <span className="title-span">{selectedUser.website}</span>
        </div>
      </div>
      <div className="company-details">
        <div className="section-heading">Company</div>
        <div className="info-div">
          <div className="title">Name</div>
          <span className="title-span">{selectedUser.company.name}</span>
        </div>
        <div className="info-div">
          <div className="title">catchPhrase</div>
          <span className="title-span">{selectedUser.company.catchPhrase}</span>
        </div>
        <div className="info-div">
          <div className="title">bs</div>
          <span className="title-span">{selectedUser.company.bs}</span>
        </div>
      </div>
    </div>
  );
}

export default BottonLeftComponent;
