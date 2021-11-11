import React, { useState } from "react";
import { Link } from "react-router-dom";
import appLogo from "../../assets/logo.svg";
import { container, logo, btns } from "../../stylesheets/navbar.module.css";
import ClickButton from "../Button";
import Sidebar from "./Sidebar";

function Navbar() {
  const [match, setMatch] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  
    const handler = (e) => setMatch(e.matches);
    window.matchMedia("(max-width: 600px)").addEventListener("change", handler);
  
  const menuList = ['Log in', 'Sign up'];

  return (
    <div className={container}>
      <div>
        <img src={appLogo} alt="logo" className={logo} />
      </div>
      {!match ? (
        <div className={btns}>
          <Link to='/signup'>
          <ClickButton variant="secondary" narrow text="Sign up" />
          </Link>
          <ClickButton variant="white" narrow text="Log in" login />
        </div>
      ) : (
          <Sidebar logo={appLogo} menulist={menuList}/>
      )}
    </div>
  );
}

export default Navbar;
