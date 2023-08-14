
import ExpenseItem from "./ExpenseItem";
import './DisplayExpenses.css'
import Card from "../UI/Card";

function DisplayExpenses(props) {
  return (
    <Card className="expense-items-container" >
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
}

export default DisplayExpenses;
