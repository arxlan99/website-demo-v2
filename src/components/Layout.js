import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NotificationFeed from "./Feed/NotificationFeed";
import "./Layout.css";

const Layout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotificationFeed, setShowNotificationFeed] = useState(false);

  const display = showSidebar ? "sidebarActive" : "";
  const notificationCss = showNotificationFeed ? "notificationFeedActive" : "";

  const notificationRef = useRef();
  const notificationButtonRef = useRef();

  const showMenuHandler = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!notificationRef.current.contains(event.target)) {
        if (!notificationButtonRef.current.contains(event.target)) {
          setShowNotificationFeed(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Header
        onShowFeed={() => setShowNotificationFeed(!showNotificationFeed)}
        onShowMenu={showMenuHandler}
        onRef={notificationButtonRef}
      />
      <Sidebar menuVisibility={display} />
      <div className="content">{props.children}</div>

      <div
        className={`content__notificationFeed ${notificationCss}`}
        ref={notificationRef}
      >
        <NotificationFeed />
        <NotificationFeed />
        <NotificationFeed />
      </div>
    </div>
  );
};

export default Layout;
