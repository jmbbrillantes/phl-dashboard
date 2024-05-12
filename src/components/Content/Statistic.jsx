import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Information from "./StatisticComponents/Information";
import TotalAccount from "./StatisticComponents/TotalAccount";
import OnlineUser from "./StatisticComponents/OnlineUser";
import Reminder from "./StatisticComponents/Reminder";
import Card from "react-bootstrap/Card";

const Statistic = () => {
  return (
    <Card style={{ margin: "1em" }} className="content-container">
      <h5>Statistic</h5>
      <hr />
      <Row>
        <Col md={8}>
          <Row>
            <Information />
          </Row>
        </Col>

        <Col md={4}>
          <Row>
            <TotalAccount />
          </Row>
          <Row>
            <OnlineUser />
          </Row>
        </Col>
      </Row>

      <Row>
        <Container fluid>
          <Reminder />
        </Container>
      </Row>
    </Card>
  );
};

export default Statistic;
