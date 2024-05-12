import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const AboutMe = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Container style={{ flex: 1 }}>
        <h5>
          About Me - <span>System</span>
        </h5>
        <hr />
        <Form>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Player ID</Form.Label>
                <Form.Control type="text" placeholder="subaccount2" readOnly />
                <hr />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Login IP</Form.Label>
                <Form.Control type="text" placeholder="49.147.91.69" readOnly />
                <hr />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Created time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="2024-04-20 10:22:35"
                  readOnly
                />
                <hr />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Last login time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="2024-05-12 19:01:27"
                  readOnly
                />
                <hr />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default AboutMe;
