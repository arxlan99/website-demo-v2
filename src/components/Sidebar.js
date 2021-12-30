import React from "react";
import CustomLink from "./CustomLink";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className={`sidebar ${props.menuVisibility}`}>
      <div className="sidebar__logo">
        <img src="/images/logo.png" width="40" alt="logo" />
      </div>
      <div className="sidebar__content">
        <div className="sidebar__item">
          <div className="sidebar__itemIcon">
            <img src="/images/bird.svg" width="25" alt="" />
          </div>

          <div className="sidebar__itemText ">
            <CustomLink to="/">Home</CustomLink>
          </div>
        </div>
        <div className="sidebar__item">
          <div className="sidebar__itemIcon">
            <img src="/images/bird.svg" width="25" alt="" />
          </div>
          <div className="sidebar__itemText">
            <CustomLink to="/battle-cards">BattleCards</CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
