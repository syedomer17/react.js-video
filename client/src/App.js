import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "College Fee",
      amount: '$250',
      date: new Date(2025, 3, 18),
    },
    {
      id: "e2",
      title: "Books",
      amount: '$100',
      date: new Date(2025, 2, 18),
    },
    {
      id: "e3",
      title: "Exam Fee",
      amount: '$2500',
      date: new Date(2025, 1, 18),
    },
    {
      id: "e4",
      title: "Mobile Recharge",
      amount: '$1000',
      date: new Date(2025, 2, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get Started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
