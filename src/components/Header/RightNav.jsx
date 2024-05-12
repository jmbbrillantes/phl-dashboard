import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const RightNav = (props) => {
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
      <Navbar.Text className="right-nav-child">Balance</Navbar.Text>
      <Navbar.Text className="right-nav-child">Login Info</Navbar.Text>
      <NavDropdown
        className="right-nav-child"
        title="Select Language"
        id={`offcanvasNavbarDropdown-expand`}
      >
        <NavDropdown.Item href="#action1">EN</NavDropdown.Item>
        <NavDropdown.Item href="#action1">CN</NavDropdown.Item>
      </NavDropdown>
      <Button variant="primary" className="right-nav-child">
        Inbox
      </Button>
      <Button className="right-nav-child" variant="danger">
        Logout
      </Button>
    </div>
  );
};

export default RightNav;
