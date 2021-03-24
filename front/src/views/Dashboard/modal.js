// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct, updateProduct } from "../../actions/productActions";

// const ModalEdit = ({ dashboardInfo }) => {
//   const [show, setShow] = useState(false);
//   const [input, setInput] = useState({
//     employer: "",
//     revenue: "",
//     completedWork: "",
//   });
//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//     console.log(input);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//       dispatch(updateProduct(dashboardInfo._id, input));

//     }
//     setShow(false);
//   };
//   const dispatch = useDispatch();
//   const handleEdit = () => {
//     setShow(true);
//     setInput(products);
//   };

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <>
//         {check ? (
//           <Button variant="primary" onClick={handleEdit}>
//             update
//           </Button>
//         ) : (
//           <Button variant="primary" onClick={handleShow}>
//             Add product
//           </Button>
//         )}

//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formGroupEmail">
//                 <Form.Label>number employer</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter number employer ..."
//                   name="employer"
//                   value={input.employer}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formGroupPassword">
//                 <Form.Label>Revenue</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter the revenue ..."
//                   name="revenue"
//                   value={input.revenue}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formGroupPassword">
//                 <Form.Label>Url Image</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={input.completedWork}
//                   placeholder="Enter url image"
//                   name="completedWork"
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Button type="submit" variant="primary">
//                 Save
//               </Button>
//             </Form>
//           </Modal.Body>
//           {/* <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Save</Button>
//           </Modal.Footer> */}
//         </Modal>
//       </>
//     </div>
//   );
// };

// export default ModalEdit;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { updateDashboardInfo } from "../../actions/dashboardActions";

const ModalUpdate = ({ dashboardInfo }) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    employer: "",
    revenue: "",
    completedWork: "",
    client: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDashboardInfo(dashboardInfo._id, input));
    setShow(false);
  };
  const handleEdit = () => {
    setShow(true);
    setInput(dashboardInfo);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleEdit}>
        Update info
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Number of workers</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Number of workers"
                value={input.employer}
                name="employer"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Enter the Revenue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Revenue"
                value={input.revenue}
                name="revenue"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Number of Clients</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Number of Clients"
                value={input.client}
                name="client"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Completed work</Form.Label>
              <Form.Control
                type="test"
                placeholder="Enter number Completed work"
                value={input.completedWork}
                name="completedWork"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalUpdate;
