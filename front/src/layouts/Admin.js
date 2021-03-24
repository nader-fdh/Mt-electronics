import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { loadUser } from "../actions/authActions";
import routes from "../routes";
import UserService from "../services/user.service";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  // const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className={classes.wrapper}>
      {content === "Admin Content." ? (
        <>
          <h3>{content}</h3>
          <Sidebar
            routes={routes}
            logoText={"MT ELECTRONICS"}
            logo={logo}
            image="https://i.pinimg.com/originals/04/30/a2/0430a263502e44a9c594096cc312982e.jpg"
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color={color}
            {...rest}
          />
          <div className={classes.mainPanel} ref={mainPanel}>
            <Navbar
              routes={routes}
              handleDrawerToggle={handleDrawerToggle}
              {...rest}
            />
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
            {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
            {/* {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )} */}
            {getRoute() ? <Footer /> : null}
          </div>
        </>
      ) : (
        <h1>error</h1>
      )}
    </div>
  );
}
