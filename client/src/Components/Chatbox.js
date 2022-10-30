import "./Chatbox.css";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

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
        <p>
          Hello!!! This is where the messages will appear! Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
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
