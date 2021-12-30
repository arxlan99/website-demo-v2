import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const location = useLocation();

  const [showBell, setShowBell] = useState(false);

  useEffect(() => {
    if (location.pathname === "/battle-cards") {
      setShowBell(true);
    }
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="header__leftSide">
        <img
          className="header__menuIcon"
          src="/images/menu.svg"
          width="18"
          alt=""
          onClick={() => props.onShowMenu()}
        />
      </div>

      <div className="header__rightSide">
        {showBell && (
          <img
            src="/images/bell.svg"
            width="20"
            alt=""
            onClick={() => props.onShowFeed()}
            ref={props.onRef}
          />
        )}
        <img src="/images/envelope.svg" width="20" alt="" />
        <img src="/images/user.svg" width="20" alt="" />
        <div>John Doe</div>
      </div>
    </div>
  );
};

export default Header;
