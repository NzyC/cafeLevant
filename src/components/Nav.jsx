import React, { useState } from "react";
import "./Nav.css";
import Logo from "../assets/brownLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [isHome, setIsHome] = useState(true);

  const path = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      {path.pathname != "/" ? (
        <Link to="/">
          <div className="back-icon">
            <ArrowBackIcon />
          </div>
        </Link>
      ) : (
        <div className="side-menu-wrapper">
          <MenuIcon className="side-menu-icon" onClick={handleMenuToggle} />
        </div>
      )}
      <div className="side-menu-block">
        <div className={`side-menu ${isMenuOpen && "open"}`}>
          <ClearIcon className="clear-icon" onClick={handleMenuToggle} />
          <a
            className="menu-review"
            href="https://www.google.com/search?q=cafe+levant&rlz=1C1ONGR_en-GBAU994AU994&oq=cafe+levant&aqs=chrome.0.35i39j46i20i175i199i263i512j69i59j46i175i199i512j0i10i512j69i60l3.1865j0j9&sourceid=chrome&ie=UTF-8#lrd=0x6b12bbb555f8ed79:0x4dab73769e9cba79,3,,,,"
            target="_blank"
          >
            Love us? Leave us a review
          </a>
          <p className="menu-description">
            <a
              className="menu-links"
              href="https://goo.gl/maps/RiisTGCY5A3Zapq9A"
              target="_blank"
            >
              331 Waterloo Rd, Greenacre NSW 2190
            </a>
            <br />
            <br />
            <a className="menu-links" href="tel:02-8745-0796">
              (02) 8745 0796
            </a>
            <br />
            <br />
            <a className="menu-links" href="mailto:info@cafelevant.com.au">
              info@cafelevant.com.au
            </a>
          </p>
        </div>
        <div
          className={`restOfTheScreen ${isMenuOpen && "openRest"}`}
          onClick={handleMenuToggle}
        ></div>
      </div>

      <Link to="/">
        <figure className="logo-wrapper">
          <img className="logo" src={Logo} alt="" />
        </figure>
      </Link>
    </div>
  );
}
