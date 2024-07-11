import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [showSkins, setShowSkins] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          className="header-logo"
          src="https://res.cloudinary.com/dmdp4huyc/image/upload/v1720526229/yqorckuvwwsg8vczkewg.png"
          alt=""
        />
      </div>
      <div className="header-nav">
        <ul className="nav-list">
          <li>
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
                showSkins
                  ? "header-skins-container show-skins"
                  : "header-skins-container"
              }
            >
              <ul>
                <li>
                  <Link to="/skins/vandal">Vandal</Link>
                </li>
                <li>
                  <Link to="/skins/phantom">Phantom</Link>
                </li>
                <li>
                  <Link to="/skins/sheriff">Sheriff</Link>
                </li>
                <li>
                  <Link to="/skins">Others</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/agents">Agents</Link>
          </li>
          <li>
            <Link to="/buddies">Buddies</Link>
          </li>
          <li>
            <Link to="/sprays">Sprays</Link>
          </li>
          <li></li>
        </ul>
      </div>
      <div>
        <a className="nav-profile" onClick={() => setShowProfile((p) => !p)}>
          Profile{" "}
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
              <Link to="/">Skins</Link>
            </li>
            <li>
              <Link to="/">Agents</Link>
            </li>
            <li>
              <Link to="/">Buddies</Link>
            </li>
            <li>
              <Link to="/">Sprays</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
