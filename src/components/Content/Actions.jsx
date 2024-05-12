import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Actions.css";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const actionsData = [
  {
    enabled: true,
    setting: "referralSetting",
    icon: "#$",
  },
  {
    enabled: true,
    setting: "imSetting",
    icon: "!@",
  },
  {
    enabled: true,
    setting: "changePassword",
    icon: "%&",
  },
  {
    enabled: true,
    setting: "resetSecurityCode",
    icon: "&@",
  },
  {
    enabled: true,
    setting: "2faSetting",
    icon: "@!",
  },
  {
    enabled: false,
    setting: "inbox",
    icon: "@#",
  },
];

function camelCaseToWords(s) {
  const result = s.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const Actions = () => {
  const [show, setShow] = useState(false);
  const toggetHideShow = () => setShow(!show);

  return (
    <Card
      className="content-container"
      id="actions-container"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Container fluid style={{ flex: 1 }}>
        <h5>Actions</h5>
        <hr />

        <Container
          className="buttons-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: 0,
            margin: 0,
          }}
        >
          {actionsData.map((action) =>
            action.enabled ? (
              <>
                <Button variant="primary" size="lg" onClick={toggetHideShow}>
                  <span>{action.icon}</span>
                  <p>{camelCaseToWords(action.setting).toUpperCase()}</p>
                </Button>

                <Modal show={show} onHide={toggetHideShow}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {action.icon}{" "}
                      {camelCaseToWords(action.setting).toUpperCase()}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Hello {action.setting} + {action.icon}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={toggetHideShow}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={toggetHideShow}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            ) : (
              ""
            )
          )}
        </Container>
      </Container>
    </Card>
  );
};

export default Actions;
