import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Table } from "react-bootstrap";

const Footer = () => {
  const liveData = [
    {
      platformName: "WM",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 10000,
    },
    {
      platformName: "Evolution",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "Sexy",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "DG",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "MG",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "EZUGI",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
  ];

  const egamesData = [
    {
      platformName: "JILI",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "FC",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "JDB",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "PlayStar",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "Acewin",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "Rich88",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "DS88",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "PG",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "KingMaker",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "KA",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
  ];

  const sportsData = [
    {
      platformName: "BTI",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "B2BSportsBook",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
    {
      platformName: "LuckySport",
      rebate: 0.0,
      pt: 100,
      minAmount: 1,
      maxAmount: 99999999,
    },
  ];

  const renderRows = (data) => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.platformName}</td>
        <td>{item.rebate}</td>
        <td>{item.pt}</td>
        <td>{item.minAmount}</td>
        <td>{item.maxAmount}</td>
      </tr>
    ));
  };

  return (
    <Tabs
      defaultActiveKey="live"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="live" title="LIVE">
        <Container fluid>
          <h5>Live Platform Details</h5>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Platform Name</th>
                <th>Rebate</th>
                <th>PT</th>
                <th>Min Amount</th>
                <th>Max Amount</th>
              </tr>
            </thead>
            <tbody>{renderRows(liveData)}</tbody>
          </Table>
        </Container>
      </Tab>
      <Tab eventKey="egames" title="E-GAMES">
        <Container fluid>
          <h5>E-Games Platform Details</h5>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Platform Name</th>
                <th>Rebate</th>
                <th>PT</th>
                <th>Min Amount</th>
                <th>Max Amount</th>
              </tr>
            </thead>
            <tbody>{renderRows(egamesData)}</tbody>
          </Table>
        </Container>
      </Tab>
      <Tab eventKey="sports" title="SPORTS">
        <Container fluid>
          <h5>Sports Platform Details</h5>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Platform Name</th>
                <th>Rebate</th>
                <th>PT</th>
                <th>Min Amount</th>
                <th>Max Amount</th>
              </tr>
            </thead>
            <tbody>{renderRows(sportsData)}</tbody>
          </Table>
        </Container>
      </Tab>
    </Tabs>
  );
};

export default Footer;
