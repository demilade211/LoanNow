/* eslint-disable react/prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { FiSliders as SettingsIcon } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../actions/userActions";
import { ReactComponent as DashboardIcon } from "../../assets/DashboardIcon.svg";
import { ReactComponent as LoansIcon } from "../../assets/LoanIcon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import {
  menu_icon,
  menu_text,
  menuItem,
  logout_text,
  logout_container,
} from "../../stylesheets/dashboard.module.css";
import {
  menu__toggle,
  menuBox,
  menuPaper,
  logo_sidebar,
  list_options,
  listText,
} from "../../stylesheets/sidebar.module.css";

function Sidebar({ logo, menulist }) {
  const [Open, setOpen] = useState({
    left: false,
  });
  const [bg, setbg] = React.useState({});
  const [color, setcolor] = React.useState({});

  const alert = useAlert();
  const dispatch = useDispatch();

  const handleMouseEnter = (label) => {
    setcolor({
      [label]: {
        color: "#1E0448",
        fill: "#1E0448",
        stroke: "#1E0448",
      },
    });
    setbg({
      [label]: {
        background: "#fff",
      },
    });
  };

  const handleMouseLeave = (label) => {
    setbg({ [label]: { background: "#1E0448" } });
    setcolor({
      [label]: {
        color: "#FFF",
        fill: "#FFF",
      },
    });
  };

  const { authReducer: { isAuthenticated } } = useSelector((state) => state);


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen({ open, [anchor]: open });
  };

  const logoutHandler = () => {
    dispatch(logOut());
    alert.success("Logged out successfully.");
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={menuBox}
    >
      <List>
        <div>
          <img src={logo} alt="logo" className={logo_sidebar} />
        </div>
        <div className={list_options}>
          {menulist.map((item) => (
            <List>
              <ListItem button key={item}>
                <Link to={`${item.path}`}>
                  <p className={listText}>{item.target}</p>
                </Link>
              </ListItem>
            </List>
          ))}
        </div>
      </List>
      <Divider />
    </Box>
  );
  const loggedIn = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={menuBox}
    >
      <div>
        <img src={logo} alt="logo" className={logo_sidebar} />
      </div>
      <List>
        {[
          { label: "Dashboard", path: "/", Icon: DashboardIcon },
          { label: "Loans", path: "/loans", Icon: LoansIcon },
          { label: "Settings", path: "/settings", Icon: SettingsIcon },
        ].map((menu) => {
          const { Icon, label, path } = menu;
          return (
            <Link to={`${path}`}>
              <ListItem
                button
                key={menu.label}
                className={menuItem}
                style={{ ...bg[label], marginTop: "2rem" }}
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={() => handleMouseLeave(label)}
              >
                <ListItemIcon>
                  <Icon className={menu_icon} style={color[label]} />
                </ListItemIcon>
                <ListItemText
                  primary={menu.label}
                  className={menu_text}
                  style={color[label]}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List className={logout_container}>
        {[
          {
            label: "Logout",
            path: "/logout",
            Icon: LogoutIcon,
            click: logoutHandler,
          },
        ].map((item) => {
          const { Icon } = item;
          return (
            <ListItem
              button
              key={item.label}
              style={{ marginTop: "9rem" }}
              onClick={item.click}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                style={{ color: "#FF0000" }}
                className={logout_text}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon className={menu__toggle} onClick={toggleDrawer("left", true)} />
      {isAuthenticated && (
        <SwipeableDrawer
          anchor="left"
          open={Open.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          className={menuPaper}
        >
          {loggedIn("left")}
        </SwipeableDrawer>
      )}
      {!isAuthenticated && (
        <SwipeableDrawer
          anchor="left"
          open={Open.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          className={menuPaper}
        >
          {list("left")}
        </SwipeableDrawer>
      )}
    </div>
  );
}

export default Sidebar;
