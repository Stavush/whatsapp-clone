import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebar-chat">
      <Avatar />
      <div className="sidebar-chat-info">
        <h3>Name</h3>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
