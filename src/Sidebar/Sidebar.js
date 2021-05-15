import React from "react";
import "./sidebar.sass";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* twitter icon */}
      <TwitterIcon />

      <SidebarOptions Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />

      {/* sidebar options */}
      {/* sidebar options */}
      {/* sidebar options */}

      {/* Button -> tweet */}
    </div>
  );
}

export default Sidebar;
