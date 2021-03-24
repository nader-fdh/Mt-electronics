import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/authActions";
import Form from "react-bootstrap/Form";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
// import CustomInput from "../../components/CustomInput/CustomInput";

import "./styleProfile.css";
// import CardFooter from "../../components/Card/CardFooter";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile({ history }) {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  // useEffect(() => {
  //   if (auth.isAuth) {
  //     history.push("/admin");
  //   }
  // }, [auth.isAuth]);

  const registerNow = (e) => {
    e.preventDefault();
    // console.log(info);
    dispatch(registerUser(info));
  };

  const handlechange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const classes = useStyles();
  return (
    <div className="profilBody">
      <GridContainer onSubmit={registerNow}>
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={auth.user.avatar} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>
                    {auth.user.fname}__{auth.user.lname}
                  </h5>
                  <h6>Web Developer and Designer</h6>
                </div>
              </div>
              {/* <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit"
                />
              </div> */}
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{auth.user._id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{auth.user.fname}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{auth.user.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>24 254 269</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>Electricien</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </GridContainer>
    </div>
  );
}
