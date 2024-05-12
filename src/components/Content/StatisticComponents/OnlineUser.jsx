import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const OnlineUser = () => {
  const data = [
    {
      name: "Finance",
      count: "49(36+0+13)",
    },
    {
      name: "Senior Master Agent",
      count: "260(201+0+59)",
    },
    {
      name: "Agent",
      count: "1256(685+9+562)",
    },
    {
      name: "Player",
      count: "6709(3563+48+3098)",
    },
  ];

  const renderRows = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.count}</td>
      </tr>
    ));
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

  return (
    <Container fluid>
      <h5>
        Online User
        <span title="Default title">
          {" "}
          <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
            <Button variant="success">#</Button>
          </OverlayTrigger>
        </span>
      </h5>
      <hr />
      <Table responsive striped bordered hover>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead> */}
        <tbody>{renderRows()}</tbody>
      </Table>
    </Container>
  );
};

export default OnlineUser;
