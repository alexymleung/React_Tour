import { useState } from "react";
import logo from "/src/assets/horse-vector-logo260x260.svg";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
  const [isToggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return (
    <nav>
      <nav className="navbar">
        <div className="container navbar-flex">
          <img
            // src="./img/horse-vector-logo260x260.svg"
            src={logo}
            alt=""
            className="logo"
          />

          {/* <!-- desktop-menu --> */}
          <div className="main-menu">
            <PageLink groupName="menu-list" itemName="menu-item" />
          </div>

          {/* <!-- mobile-menu --> */}
          <div className="mobile-menu">
            <div className="mobile-menu-toggle" onClick={handleToggle}>
              <i className="fa-solid fa-bars fa-2x"></i>
            </div>
            <div
              className={
                isToggle ? "mobile-menu-items active" : "mobile-menu-items"
              }
            >
              <PageLink
                groupName="mobile-menu-list"
                itemName="mobile-menu-item"
              />
            </div>
          </div>
          <div className="icon-menu">
            <SocialLink />
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
