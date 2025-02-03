"use client";

import Navbar from "../components/Navbar";
import "./styles.css";
import React from "react";
import { Line } from "react-chartjs-2";
import Particles from "../components/Particles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const transactionData = [
  { vendor: "Dad", date: "2025-01-13T10:00:00", amount: 10000 },
  { vendor: "Swiggy", date: "2025-01-27T12:00:00", amount: -500 },
  { vendor: "Mom", date: "2025-01-29T09:00:00", amount: 2000 },
  { vendor: "Zomato", date: "2025-02-01T14:00:00", amount: -300 },
  { vendor: "Zomato", date: "2025-02-02T11:00:00", amount: -1500 },
  { vendor: "Hackathon", date: "2025-02-03T16:00:00", amount: 2000 },
];


const App: React.FC = () => {
  const transactionsByDay: { [key: string]: number } = {};
  const transactionsByMonth: { [key: string]: number } = {};

  transactionData.forEach((transaction) => {
    const date = new Date(transaction.date);
    const day = date.toISOString().split("T")[0];
    const month = date.toISOString().split("T")[0].slice(0, 7); 

    transactionsByDay[day] = (transactionsByDay[day] || 0) + transaction.amount;
    transactionsByMonth[month] =
      (transactionsByMonth[month] || 0) + transaction.amount;
  });

  const dailyLabels = Object.keys(transactionsByDay);
  const dailyData = Object.values(transactionsByDay);

  const monthlyLabels = Object.keys(transactionsByMonth);
  const monthlyData = Object.values(transactionsByMonth);

  const dailyChartData = {
    labels: dailyLabels,
    datasets: [
      {
        label: "Expenditure per Day",
        data: dailyData,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const monthlyChartData = {
    labels: monthlyLabels,
    datasets: [
      {
        label: "Expenditure per Month",
        data: monthlyData,
        fill: false,
        borderColor: "rgba(153,102,255,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="fixed inset-0 bg-black bg-center pointer-events-none -z-10">
          <Particles />
        </div>
        <div
          style={{
            padding: "20px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <div
            style={{
              width: "80vw",
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Daily expenditure graph */}
            <div id="graphbox">
              <h2 id="hmm">Expenditure per Day</h2>
              <Line data={dailyChartData} />
            </div>

            {/* Monthly expenditure graph */}
            <div id="graphbox">
              <h2 id="hmm">Expenditure per Month</h2>
              <Line data={monthlyChartData} />
            </div>
          </div>
          <h1 id="lol">Transaction Table</h1>
          <br></br>
          <table
            style={{
              width: "80%",
              borderCollapse: "collapse",
              textAlign: "center",
              borderRadius: "10px",
              border: "2px solid red",
            }}
          >
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Date of Transaction</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((transaction, index) => (
                <tr key={index} style={{color: transaction.amount > 0 ? "green" : "red", }}>
                  <td> {transaction.vendor}</td>
                  <td>{new Date(transaction.date).toLocaleString()}</td>
                  <td>{transaction.amount > 0? `+${transaction.amount}` : transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
