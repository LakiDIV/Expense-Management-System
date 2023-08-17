import "./DisplayExpenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function DisplayExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  let filterInfoText = "";

  if (filteredYear === "2023") {
    filterInfoText = "2024, 2025 & 2026";
  } else if (filteredYear === "2024") {
    filterInfoText = "2023, 2025 & 2026";
  } else if (filteredYear === "2025") {
    filterInfoText = "2023, 2024 & 2026";
  } else {
    filterInfoText = "2023, 2024 & 2025";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expense-items-container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <p>Data for years {filterInfoText} is hidden.</p>

      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default DisplayExpenses;
