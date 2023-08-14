import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.expense.date.toLocaleString("en-US", { month: "long" });
  const day = props.expense.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expense.date.getFullYear();
  return (
    <Card className="expense-item">
      <div className="expense-item-date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item-description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item-price">$ {props.expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
