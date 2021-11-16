/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import {
  menu__toggle,
  menuBox,
  menuPaper,
  logo_sidebar,
    list_options,
  listText
} from "../../stylesheets/sidebar.module.css";

function Sidebar({ logo, menulist }) {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ state, [anchor]: open });
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
          {menulist.map((text) => (
            <ListItem button key={text}>
                  <p className={listText}>
                    {text}
                  </p>
            </ListItem>
          ))}
        </div>
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <GoThreeBars className={menu__toggle} />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        className={menuPaper}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}

export default Sidebar;
