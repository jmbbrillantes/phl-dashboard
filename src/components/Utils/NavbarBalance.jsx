import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

const NavbarBalance = () => {
  return (
    <Navbar.Text
      className="right-nav-child navbar-text"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Balance</p>
      <span>0</span>
    </Navbar.Text>
  );
};

export default NavbarBalance;
