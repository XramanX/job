import React from "react";
import RightTopComponent from "../common/RightTopComponent";
import BottonLeftComponent from "./bottomComponent/BottonLeftComponent";
import BottomRightComponent from "./bottomComponent/BottomRightComponent";

function Profile({ selected }) {
  return (
    <div className="right-content">
      <RightTopComponent title={selected} />
      <div className="right-bottom-content">
        <BottonLeftComponent />
        <BottomRightComponent />
      </div>
    </div>
  );
}

export default Profile;
