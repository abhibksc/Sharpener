import React, { useState } from "react";

const ExpenseForm = (props) => {
  // const { onSaveExpenseDate } = props;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      location: enteredLocation,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseDate(expenseData)

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div>
      <form className="Expense__form" onSubmit={submitHandler}>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />

        <label htmlFor="amount">Expense Amount</label>
        <input
          type="number"
          id="amount"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />

        <label htmlFor="location">Expense location</label>
        <input
          type="text"
          id="location"
          value={enteredLocation}
          onChange={locationChangeHandler}
        />

        <label htmlFor="date">Expense Date</label>
        <input
          type="date"
          id="date"
          value={enteredDate}
          onChange={dateChangeHandler}
        />

        <button type="submit" className="addExpense">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
