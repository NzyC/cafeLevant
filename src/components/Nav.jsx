import React from "react";
import "./Nav.css";
import Logo from "../assets/brownLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className="side-menu">
        <MenuIcon className="side-menu-icon" />
      </div>

      <Link to="/">
        <figure className="logo-wrapper">
          <img className="logo" src={Logo} alt="" />
        </figure>
      </Link>
    </div>
  );
}
