import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/authActions";
import Navbar from "../../components/homePage/NavBar";
import "./register.css";

const Register = ({ history }) => {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) {
      history.push("/admin");
    }
  }, [auth.isAuth]);

  const registerNow = (e) => {
    e.preventDefault();
    // console.log(info);
    dispatch(registerUser(info, file));
  };

  const handlechange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(auth);

  const selectImageToUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <div style={{ marginBottom: "80px" }}>
        <Navbar />
      </div>
      <div className="warpper fl">
        <div className="main">
          <div class="head">
            <p>Registration </p>
          </div>
          <div class="form fl">
            <form method="POST" onSubmit={registerNow}>
              <p class="name">FIRST NAME*:</p>
              <p>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  class="name-inp"
                  onChange={handlechange}
                />
              </p>
              <p class="name">LAST NAME* :</p>
              <p>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  class="name-inp"
                  onChange={handlechange}
                />
              </p>
              <p class="name">EMAIL* :</p>
              <p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="name-inp"
                  onChange={handlechange}
                />
              </p>
              <p class="name">PASSWORD* :</p>
              <p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="pass"
                  onChange={handlechange}
                />
              </p>
              <div>
                <label class="name">Upload Image</label>
                <input
                  class="name-inp"
                  type="file"
                  name="avatar"
                  onChange={selectImageToUpload}
                />
              </div>
              <button className="btnSubmit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
