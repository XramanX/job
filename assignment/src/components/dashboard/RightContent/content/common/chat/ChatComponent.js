import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Chat from "../../../../../../assets/icons/chat.svg";
import UpArrow from "../../../../../../assets/icons/upArrow.svg";

import UserChat from "./UserChat";

function ChatComponent() {
  const users = useSelector((state) => state.users.users);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleChatContainerClick = () => {
    setIsOpen(!isOpen);
  };
  const getRandomColor = () => {
    const colors = ["#A4A4A4", "#1EAB5E"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const popupRef = useRef(null);
  const chatBoxRef = useRef(null);
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
      setSelectedUser(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div
        className={`chat-container ${isOpen ? "open" : ""}`}
        onClick={handleChatContainerClick}
      >
        <div className="chat-icon">
          <img className="chatIcon" src={Chat} alt="Chat" />
          <span className="chat-text">Chats</span>
        </div>
        <img
          className={`up-arrow ${isOpen ? "inverse-arrow" : ""}`}
          src={UpArrow}
          alt="UpArrow"
        />
      </div>
      {isOpen && (
        <div className="user-list" ref={popupRef}>
          {users.map((user) => (
            <div
              key={user.id}
              className={`user ${
                selectedUser && selectedUser.id === user.id ? "selected" : ""
              }`}
              onClick={() => handleUserClick(user)}
            >
              <div className="user-profile">
                <img
                  className="user-avatar"
                  src={user.profilepicture}
                  alt="User Avatar"
                />
              </div>
              <div className="user-details-chat">
                <div className="user-name-chat">{user.name}</div>
                <div
                  className="green-dot"
                  style={{ backgroundColor: getRandomColor() }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedUser && (
        <UserChat selectedUser={selectedUser} chatBoxRef={chatBoxRef} />
      )}
    </div>
  );
}

export default ChatComponent;
