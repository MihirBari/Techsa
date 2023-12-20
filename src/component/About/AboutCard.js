import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function AboutCard(props) {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <div className="productList">
      <div key={props.id} onClick={openModal} className="productCard">
        <img
          style={{ width: "150px", height: "200px" }}
          src={props.image}
          alt="product-img"
          className="productImage"
        />
        <div className="productCard__content">
          <h3 className="productName">{props.name}</h3>
          <div className="displayStack__1">
            <Link to={props.link}>
              <FaLinkedin size={30} className="productPrice" />
            </Link>
          </div>
        </div>
      </div>

      <Modal
        show={modalShow}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        style={{ zIndex: 100090 }} 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color:"grey"
          }}
        >
          <img
            style={{ width: "150px", height: "200px" }}
            src={props.image}
            alt="product-img"
            className="productImage"
          />
          <p style={{marginLeft:'25px'}}>{props.description}</p>
         
        </Modal.Body>
        <Modal.Footer style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color:"grey",
            justifyContent:'space-between'
          }}>
        <div className="displayStack__1">
            <Link to={props.link}>
              <FaLinkedin size={30} className="productPrice" />
            </Link>
          </div>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
