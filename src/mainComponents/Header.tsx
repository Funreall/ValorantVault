import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [showSkins, setShowSkins] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function closeTabs() {
    setShowProfile(false);
    setShowSkins(false);
  }

  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
            closeTabs();
          }}
          className="header-logo"
          src="https://res.cloudinary.com/dmdp4huyc/image/upload/v1720526229/yqorckuvwwsg8vczkewg.png"
          alt=""
        />
      </div>
      <div className="header-nav">
        <ul className="nav-list">
          <li id="skin-order-nav">
            <a onClick={() => setShowSkins((c) => !c)}>
              Skins{" "}
              <i
                className={
                  showSkins
                    ? "fa-solid fa-angle-down angle-active"
                    : "fa-solid fa-angle-down"
                }
              ></i>
            </a>
            <div
              className={
                showSkins ? "header-order-list show-skins" : "header-order-list"
              }
            >
              <ul>
                <li>
                  <Link onClick={() => closeTabs()} to="/skins/collection">
                    By Collection
                  </Link>
                </li>
                <li>
                  <Link onClick={() => closeTabs()} to="/skins/armory">
                    By Weapons
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link onClick={() => closeTabs()} to="/agents">
              Agents
            </Link>
          </li>
          <li>
            <Link onClick={() => closeTabs()} to="/buddies">
              Buddies
            </Link>
          </li>
          <li>
            <Link onClick={() => closeTabs()} to="/sprays">
              Sprays
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
      <div>
        <a className="nav-profile" onClick={() => setShowProfile((p) => !p)}>
          Profile&nbsp;
          <i
            className={
              showProfile
                ? "fa-solid fa-angle-down angle-active"
                : "fa-solid fa-angle-down"
            }
          ></i>
        </a>
        <div
          className={
            showProfile
              ? "header-skins-container show-skins"
              : "header-skins-container"
          }
        >
          <ul>
            <li>
              <Link onClick={() => closeTabs()} to="/">
                Skins
              </Link>
            </li>
            <li>
              <Link onClick={() => closeTabs()} to="/">
                Agents
              </Link>
            </li>
            <li>
              <Link onClick={() => closeTabs()} to="/">
                Buddies
              </Link>
            </li>
            <li>
              <Link onClick={() => closeTabs()} to="/">
                Sprays
              </Link>
            </li>
            <li>
              <Link onClick={() => closeTabs()} to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
