import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Navbar from "../../components/homePage/NavBar";
import { getDevis, postDevis } from "../../actions/devisActions";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./devis.css";

const Devis = () => {
  // const devis = useSelector((state) => state.devis.devis);
  // console.log(devis);
  const [files, setFiles] = useState(null);
  const [input, setInput] = useState({
    company: "",
    userName: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    adress: "",
    city: "",
    postalCode: "",
    description: "",
    file: [],
  });
  const handleChange = (e) => {
    if (e.target.name === "file") {
      console.log(e.target.files);
      setFiles(e.target.files);
    }
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDevis());
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDevis(input, files));
  };
  return (
    <div className="devisPage">
      <div style={{ marginBottom: "100px" }}>
        <Navbar />
      </div>
      <div className="devisForm">
        <Typography
          style={{
            fontSize: " 70px",
            fontWeight: "700",
            lineHeight: "1.2",
            textTransform: "uppercase",
            fontFamily: "Teko",

            color: "white",
          }}
          variant="h6"
        >
          Demande de devis
        </Typography>
        <div className="main">
          <Modal.Body>
            <Form className="formBody" onSubmit={handleSubmit}>
              <Form.Group>
                <h2 class="name">Company </h2>
                <Form.Control
                  type="text"
                  placeholder="Enter name of your company ..."
                  name="company"
                  value={input.company}
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">User name </h2>
                <Form.Control
                  type="text"
                  placeholder="Enter the userName ..."
                  name="userName"
                  value={input.userName}
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">First name </h2>
                <Form.Control
                  type="text"
                  value={input.fname}
                  placeholder="fname"
                  name="fname"
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">Last name </h2>
                <Form.Control
                  type="text"
                  value={input.lname}
                  placeholder="lname"
                  name="lname"
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">Email </h2>
                <Form.Control
                  type="text"
                  value={input.email}
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">Phone </h2>
                <Form.Control
                  type="text"
                  value={input.phone}
                  placeholder="phone"
                  name="phone"
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">Adress </h2>
                <Form.Control
                  type="text"
                  value={input.adress}
                  placeholder="adress"
                  name="adress"
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">Description </h2>
                <Form.Control
                  type="text"
                  value={input.description}
                  placeholder="description"
                  name="description"
                  onChange={handleChange}
                  className="devisInput"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <h2 class="name">Upload file</h2>
                <Form.File
                  value={input.file}
                  placeholder="file"
                  name="file"
                  onChange={handleChange}
                  className="devisInput"
                  multiple
                />
              </Form.Group>

              <button className="btnSubmit" type="submit">
                Send devis
              </button>
            </Form>
          </Modal.Body>
        </div>
      </div>
    </div>
  );
};
export default Devis;
