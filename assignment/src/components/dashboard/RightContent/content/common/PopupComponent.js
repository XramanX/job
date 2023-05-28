import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { setSelectedUser } from "../../../../../actions/accountAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function PopupComponent({ setShowPopUp }) {
  const selectedUser = useSelector((state) => state.account.selectedUser);
  const users = useSelector((state) => state.users.users);
  const name = selectedUser.name;

  const history = useNavigate();
  const dispatch = useDispatch();

  const otherUsers = users
    .filter((user) => user.id !== selectedUser.id)
    .slice(0, 2);

  const handleSignOut = () => {
    dispatch(setSelectedUser(null));
    history("/");
  };
  const handleAccountSelection = (user) => {
    dispatch(setSelectedUser(user));
  };
  const popupRef = useRef(null);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopUp(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="profile-pop-up show" ref={popupRef}>
      <img
        className="pop-up-profile-picture"
        src={selectedUser.profilepicture}
        alt="profilePicture"
      />
      <div className="pop-up-name">{name}</div>
      <div className="pop-up-email">{selectedUser.email}</div>
      <div className="other-users">
        {otherUsers.map((user) => (
          <div
            key={user.id}
            className="user-account"
            onClick={() => handleAccountSelection(user)}
          >
            <div className="user-profile-picture">
              <img src={user.profilepicture} alt="profilePicture" />
            </div>
            <div className="other-user-name">{user.name}</div>
          </div>
        ))}
      </div>
      <div className="sign-out-container">
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default PopupComponent;
