import ExpenseItem from "./ExpenseItem";

function DisplayExpenses(props) {
  return (
    <div>
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </div>
  );
}

export default DisplayExpenses;
