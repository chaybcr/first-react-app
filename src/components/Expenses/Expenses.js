import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpenesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangehandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYearSelect={yearChangehandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
