import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../../actions/productActions";

const ModalEdit = ({ products, check }) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (products) {
      dispatch(updateProduct(products._id, input));
    } else {
      dispatch(addProduct(input));
    }
    setShow(false);
  };
  const dispatch = useDispatch();
  const handleEdit = () => {
    setShow(true);
    setInput(products);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        {check ? (
          <Button variant="primary" onClick={handleEdit}>
            update
          </Button>
        ) : (
          <Button variant="primary" onClick={handleShow}>
            Add product
          </Button>
        )}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Name Procuct</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name of product ..."
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Descreption</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the description ..."
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Url Image</Form.Label>
                <Form.Control
                  type="text"
                  value={input.image}
                  placeholder="Enter url image"
                  name="image"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Save
              </Button>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer> */}
        </Modal>
      </>
    </div>
  );
};

export default ModalEdit;
