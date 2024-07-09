import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showSkins, setShowSkins] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <div className="header-container">
      <div className="logo-container">
        <img
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
                  <Link to="/">Vandal</Link>
                </li>
                <li>
                  <Link to="/">Phantom</Link>
                </li>
                <li>
                  <Link to="/">Operator</Link>
                </li>
                <li>
                  <Link to="/">Spectre</Link>
                </li>
              </ul>
            </div>
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
            <a onClick={() => setShowProfile((p) => !p)}>
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
