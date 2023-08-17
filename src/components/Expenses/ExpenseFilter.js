import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <label for="year">Filter by year:</label>
      <select
        className="custom-select"
        value={props.selected}
        onChange={dropDownChangeHandler}
      >
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
