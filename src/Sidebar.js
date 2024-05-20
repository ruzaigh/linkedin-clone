import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://getwallpapers.com/wallpaper/full/3/4/3/939541-wallpapers-for-laptop-background-1920x1200-for-ios.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoURL} />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">24</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">24</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("Angularjs")}
        {recentItem("programming")}
        {recentItem("software development")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
