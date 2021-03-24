import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";
import { logoutUser } from "../../actions/authActions";
import styles from "../../assets/jss/material-dashboard-react/components/headerLinksStyle";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <div className={classes.searchWrapper}>
        {/* <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search,
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
            },
          }}
        /> */}
        {/* <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button> */}
      </div>

      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener>
                  <MenuList role="menu">
                    <MenuItem className={classes.dropdownItem}>
                      <Link
                        style={{ textDecoration: "none", color: "darkgray" }}
                        to="/admin/user"
                      >
                        Profile
                      </Link>
                    </MenuItem>
                    {/* <MenuItem className={classes.dropdownItem}>
                      Settings
                    </MenuItem> */}
                    <Divider light />
                    <MenuItem
                      onClick={() => dispatch(logout())}
                      className={classes.dropdownItem}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "darkgray" }}
                        to="/home"
                      >
                        Logout
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}
