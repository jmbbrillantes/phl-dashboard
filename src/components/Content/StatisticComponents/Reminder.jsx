import React from "react";
import Card from "react-bootstrap/Card";

const Reminder = () => {
  return (
    <Card style={{ width: "auto", margin: "1em 0" }}>
      <Card.Body style={{ backgroundColor: "#f4e2e2" }}>
        <Card.Title style={{ color: "#b10128" }}>
          Account will be locked if it is inactive for 60 days and will be
          deleted after being locked for 90 days.
        </Card.Title>
        <Card.Text>
          When the downline account is deleted under cash mode, the balance of
          the downline will be added to the upline’s balance.
          <br />
          E.g. Delete a downline account with 5,000 balance, the 5,000 balance
          will be added to the upline's wallet.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Reminder;
