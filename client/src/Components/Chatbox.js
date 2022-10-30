import "./Chatbox.css";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import ChatMessage from "./ChatMessage";

function Chatbox() {
  return (
    <div className="chatbox">
      <div className="chat-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chatbox-header-buttons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatbox-container">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>

      <div className="chatbox-message-input">
        <IconButton>
          <MicIcon />
        </IconButton>
        <input type="text" placeholder="Type a message"></input>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chatbox;
