import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiAppBar from "@mui/material/AppBar";
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FiSliders as SettingsIcon } from "react-icons/fi";
import { useDispatch,useSelector } from "react-redux";
import { logOut } from "../../actions/userActions";
import { ReactComponent as DashboardIcon } from "../../assets/DashboardIcon.svg";
import { ReactComponent as LoansIcon } from "../../assets/LoanIcon.svg";
import Logo from "../../assets/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/Logo_two.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as NotifIcon } from "../../assets/NotifIcon.svg";
import {
  logo,
  iconhandler,
  menu_icon,
  menu_text,
  menuItem,
  logout_text,
  notifIcon,
} from "../../stylesheets/dashboard.module.css";
import DashboardHome from "./DashboardHome";

/* eslint-disable react/prop-types */

const drawerWidth = 240;




const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#1E0448",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "#1E0448",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {

  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({alert}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [bg, setbg] = React.useState({});
  const [color, setcolor] = React.useState({});
 const [match, setMatch] = React.useState(
   window.matchMedia("(max-width: 700px)").matches
 );
  
  
    const dispatch = useDispatch();
  

    const logoutHandler = () => {
      dispatch(logOut());
      alert.success("Logged out successfully.");
    };
    
    const {user}  = useSelector(state => state.authReducer)
  const handler = (e) => setMatch(e.matches);
  window.matchMedia("(max-width: 700px)").addEventListener("change", handler);
  const userName = user.name;
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#fff" }}>
        <Toolbar
          sx={{
            background: "#fff",
            color: "#1E0448",
            padding: 0,
          }}
          style={{ padding: 0, position: "relative" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={!match ? handleDrawerOpen : handleDrawerClose}
            edge="start"
            sx={{
              background: "#1E0448",
              paddingLeft: "none",
              borderRadius: "inherit",
              ...(open && { display: "none" }),
            }}
            className={iconhandler}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="profile pic"
            src={user.avatar.url}
            sx={{ marginLeft:"10px"}}
          />
          <Typography
            variant="p"
            noWrap
            component="div"
            style={{ marginLeft: "0.7rem" }}
          >
            Hello, {userName}
          </Typography>
          <NotifIcon className={notifIcon} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: "center" }}>
          <img src={Logo} alt="logo" className={logo} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "#FFAB48" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "#FFAB48" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { label: "Dashboard", path: "/dashboard", Icon: DashboardIcon },
            { label: "Loans", path: "/loans", Icon: LoansIcon },
            { label: "Settings", path: "/settings", Icon: SettingsIcon },
          ].map((menu) => {
            const { Icon, label } = menu;

            return (
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
            );
          })}
        </List>
        <Divider />
        <List>
          {[{ label: "Logout", path: "/logout", Icon: LogoutIcon, click:logoutHandler }].map(
            (item) => {
              const { Icon } = item;
              return (
                <ListItem button key={item.label} style={{ marginTop: "9rem" }} onClick={item.click}>
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
            }
          )}
        </List>
      </Drawer>
      <DashboardHome alert = {alert} fullName={user.name}/>
    </Box>
  );
}
