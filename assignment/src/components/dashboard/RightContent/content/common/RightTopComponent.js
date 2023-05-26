import React from "react";

function RightTopComponent({ title, name }) {
  return (
    <>
      <h2 className="component-heading">{title}</h2>
      <div className="profile-container">
        <div className="profile-container">
          <div className="profile-picture"></div>
          <div className="profile-name">{name}</div>
        </div>
      </div>
    </>
  );
}

export default RightTopComponent;
