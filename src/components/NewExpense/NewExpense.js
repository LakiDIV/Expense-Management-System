import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      // Add an auto generated ID
      // ! Have a probability to generate the same ID more than once
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      {/* Passing a function */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
}

export default NewExpense;
