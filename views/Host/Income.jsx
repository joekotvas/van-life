import React from "react";
import { Link } from "react-router-dom";
import incomeChart from "../../images/income-chart.svg";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <section className="host-income-section">
      <header>
        <h1>Income</h1>
      </header>

      <span>
        Last{" "}
        <Link to="/host/reviews" className="filter-link">
          30 days
        </Link>
      </span>
      <p className="income-amount">$2,260</p>

      <img src={incomeChart} alt="Income chart" />

      <div className="info-header">
        <h3>Your Transactions ({transactionsData.length})</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>

      {transactionsData.map((transaction) => (
        <div key={transaction.id} className="transaction">
          <p className="transaction-amount">${transaction.amount}</p>
          <p className="transaction-date">{transaction.date}</p>
        </div>
      ))}
    </section>
  );
}
