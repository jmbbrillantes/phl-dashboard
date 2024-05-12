import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";

const RightNav = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const classNames = props.platform;
  return (
    <div
      style={{}}
      className={
        classNames === "desktop"
          ? "right-nav right-nav-desktop"
          : "right-nav right-nav-mobile"
      }
    >
      <Navbar.Text className="right-nav-child">
        Balance: <span>0</span>
      </Navbar.Text>
      <Navbar.Text className="right-nav-child">Login Info</Navbar.Text>
      <NavDropdown
        className="right-nav-child"
        title="Select Language"
        id={`offcanvasNavbarDropdown-expand`}
      >
        <NavDropdown.Item href="#action1">EN</NavDropdown.Item>
        <NavDropdown.Item href="#action1">CN</NavDropdown.Item>
      </NavDropdown>
      <>
        <Button
          variant="primary"
          onClick={handleShow}
          className="right-nav-child"
        >
          Inbox
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Button className="right-nav-child" variant="danger">
        Logout
      </Button>
    </div>
  );
};

export default RightNav;
