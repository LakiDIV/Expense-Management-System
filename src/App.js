import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "95.12",
      date: new Date(2020, 8, 24),
    },
    {
      id: "e2",
      title: "Groceries",
      amount: "35.78",
      date: new Date(2022, 3, 15),
    },
    {
      id: "e3",
      title: "Restaurant",
      amount: "54.99",
      date: new Date(2021, 5, 10),
    },
    {
      id: "e4",
      title: "Movie Tickets",
      amount: "25.50",
      date: new Date(2023, 1, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In APP.js");
    console.log(expense);
  };

  return (
    <div>
      <h2>Expenses Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
}

export default App;
