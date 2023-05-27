import React from "react";
import { useSelector } from "react-redux";
import CompanyMap from "../../common/CompanyMap";

function BottomRightComponent() {
  const selectedUser = useSelector((state) => state.account.selectedUser);

  return (
    <div className="profile-bottom-right">
      <div className="right-section-heading">Address</div>
      <div className="address-details">
        <div className="info-div">
          <div className="title">Street</div>
          <span className="title-span">{selectedUser.username}</span>
        </div>
        <div className="info-div">
          <div className="title">Suit</div>
          <span className="title-span">{selectedUser.email}</span>
        </div>
        <div className="info-div">
          <div className="title">City</div>
          <span className="title-span">{selectedUser.phone}</span>
        </div>
        <div className="info-div">
          <div className="title">Zipcode</div>
          <span className="title-span">{selectedUser.website}</span>
        </div>
      </div>
      <CompanyMap lat={37.7749} lng={-122.4194} />
      <div></div>
    </div>
  );
}

export default BottomRightComponent;
