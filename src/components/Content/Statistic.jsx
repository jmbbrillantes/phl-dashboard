import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Information from "./StatisticComponents/Information";
import TotalAccount from "./StatisticComponents/TotalAccount";
import OnlineUser from "./StatisticComponents/OnlineUser";

const Statistic = () => {
  return (
    <Container fluid>
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
    </Container>
  );
};

export default Statistic;
