import React from "react";
import Send from "../../../../../../assets/icons/send.svg";
import Close from "../../../../../../assets/icons/close.svg";
import Chat from "../../../../../../assets/icons/chat.svg";
import UpArrow from "../../../../../../assets/icons/upArrow.svg";

function UserChat({ selectedUser, chatBoxRef }) {
  return (
    <div className="new-chat-box" ref={chatBoxRef}>
      <div className="new-chat-header">
        <div className="new-chat-icon">
          <img
            className="userprofile-picture-chat"
            src={selectedUser.profilepicture}
            alt="Chat"
          />
          <span className="chat-text-username">{selectedUser.name}</span>
        </div>
        <div className="chat-icons">
          <img
            className="up-arrow inverse-arrow"
            src={UpArrow}
            alt="Additional Icon"
          />
          <img className="close-icon" src={Close} alt="Additional Icon" />
        </div>
      </div>

      <div className="chat-messages">
        <div className="chat-message receiver-message">
          <div className="message-content">Hello!</div>
        </div>
        <div className="chat-message sender-message">
          <div className="message-content">Hi there!</div>
        </div>
        <div className="chat-message receiver-message">
          <div className="message-content">How are you?</div>
        </div>
        <div className="chat-message sender-message">
          <div className="message-content">I'm doing well. Thanks!</div>
        </div>
        <div className="chat-message receiver-message">
          <div className="message-content">Nice to meet you!</div>
        </div>
      </div>
      <div className="new-chat-input-container">
        <input
          className="new-chat-input"
          type="text"
          placeholder="Type a message..."
        />
        <img className="send-button" src={Send} alt="send-button" />
      </div>
    </div>
  );
}

export default UserChat;
