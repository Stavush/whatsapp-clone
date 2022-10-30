import "./Sidebar.css";
import { IconButton, Avatar } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-avatar">
          <Avatar src="https://i.imagesup.co/images2/4e83f4e75bfcd3eda4058bca180130b43d1ed9cc.jpg" />
        </div>

        <div className="sidebar-header-controllers">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <CommentIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-input">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search or start new chat"></input>
        </div>
      </div>

      <div className="sidebar-chats-display">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
