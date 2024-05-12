import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Card } from "react-bootstrap";

const Information = () => {
  const [data, setData] = useState([]);
  const betData = [
    {
      validTurnover: {
        today: 809401,
        yesterday: 1367545,
        thisWeek: 7008994,
        lastWeek: 7563149,
      },
    },
    {
      memberWinLoss: {
        today: 15000,
        yesterday: 20000,
        thisWeek: 100000,
        lastWeek: 120000,
      },
    },
    {
      betCount: {
        today: 500,
        yesterday: 700,
        thisWeek: 4000,
        lastWeek: 4500,
      },
    },
    {
      activePlayer: {
        today: 300,
        yesterday: 250,
        thisWeek: 1800,
        lastWeek: 1600,
      },
    },
    {
      newPlayer: {
        today: 50,
        yesterday: 70,
        thisWeek: 300,
        lastWeek: 280,
      },
    },
    {
      newRegistered: {
        today: 60,
        yesterday: 80,
        thisWeek: 400,
        lastWeek: 350,
      },
    },
    {
      deposit: {
        today: 30000,
        yesterday: 35000,
        thisWeek: 200000,
        lastWeek: 220000,
      },
    },
    {
      withdraw: {
        today: 20000,
        yesterday: 18000,
        thisWeek: 120000,
        lastWeek: 130000,
      },
    },
    {
      "": {
        today: 50000,
        yesterday: 48000,
        thisWeek: 320000,
        lastWeek: 230000,
      },
    },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://api.example.com/data");
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const renderRows = () => {
    return betData.map((item, index) => {
      const key = Object.keys(item)[0]; // Get the key of the object
      const values = Object.values(item)[0]; // Get the values of the object

      return (
        <tr key={index}>
          <td>{key}</td>
          {Object.keys(values).map((subKey, subIndex) => (
            <td key={subIndex}>{values[subKey]}</td>
          ))}
        </tr>
      );
    });
  };

  return (
    <Card>
      <h6>Information</h6>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Today</th>
            <th>Yesterday</th>
            <th>This Week</th>
            <th>Last Week</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
    </Card>
  );
};

export default Information;
