import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link, NavLink } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import "./style.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { logout } from "../../redux/user/user.action";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#db4c3f",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    maxWidth: "800px",
    margin: "0 auto",
  },
  logo: {
    width: "2rem",
  },
  headRight: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: "16px",
    marginRight: "1rem",
  },
}));

const Layout = ({ children, user, logout }) => {
  const { email } = user;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className="d-flex align-items-center">
            <img className={classes.logo} src="/logo.png" alt="" />{" "}
            <span className="text-white ml-2">Inventory</span>
          </Link>
          <div className={classes.headRight}>
            {email && (
              <Typography variant="h6" className="mr-3">
                {email}
              </Typography>
            )}
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <NavLink
                to="/profile"
                className="selectLink"
                activeClassName="selected"
              >
                <MenuItem onClick={handleClose}>
                  <SettingsIcon className={classes.menuIcon} />
                  <span className="linkText">My Account</span>
                </MenuItem>
              </NavLink>
              <MenuItem onClick={handleLogout}>
                <ExitToAppIcon className={classes.menuIcon} />
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
