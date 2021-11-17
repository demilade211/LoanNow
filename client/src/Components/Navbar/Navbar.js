import{ useState } from "react";
import { Link, useLocation } from "react-router-dom";
import appLogo from "../../assets/logo.svg";
import { container, logo, btns } from "../../stylesheets/navbar.module.css";
import ClickButton from "../Button";
import Sidebar from "./Sidebar";

function Navbar() {


  const [match, setMatch] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

const location = useLocation();


  const handler = (e) => setMatch(e.matches);
  window.matchMedia("(max-width: 600px)").addEventListener("change", handler);


  const menuList = ["Log in", "Sign up"];
  
  return (
    <div className={container}>
      <Link to="/">
        <img src={appLogo} alt="logo" className={logo} />
      </Link>
      {!match ? (
        <div className={btns}>
          <>
            {location.pathname === "/signup" && (
              <Link to="/login">
                <ClickButton variant="secondary" narrow text="Log in" login />
              </Link>
            )}
            {location.pathname === "/home" && (
              <>
                {" "}
                <Link to="/signup">
                  <ClickButton variant="secondary" narrow text="Sign up" />
                </Link>
                <Link to="/login">
                  <ClickButton variant="white" narrow text="Log in" login />
                </Link>{" "}
              </>
            )}

            {location.pathname === "/login" && (
              <Link to="/signup">
                <ClickButton variant="secondary" narrow text="Create Account" />
              </Link>
            )}
          </>
        </div>
      ) : (
        <Sidebar logo={appLogo} menulist={menuList} />
      )}
    </div>
  );
}

export default Navbar;
