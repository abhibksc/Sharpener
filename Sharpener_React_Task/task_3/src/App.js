import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import ExpenseItem from "./Components/ExpenseItem";
import ExpenseForm from "../src/Components/ExpenseForm";
import NewExpense from "./Components/NewExpense";
import { useState } from "react";
import ExpenseFilter from "./Components/ExpenseFilter";

const AppLayout = (props) => {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "shopping",
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
      LocationOfExpenditure: "fooding",
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
      LocationOfExpenditure: "outing",
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
      LocationOfExpenditure: "renting",
    },
  ];

  const [dummyexpense, setDummyExpense] = useState(expense);
  const [isLoading, setIsLoading] = useState(true);

  const startbtn = ()=>{
    setIsLoading(false);
  }

 

  const addExpenseHandler = (expenses) => {
    setDummyExpense((preExpenses) => {
      return [expenses, ...preExpenses];
    });
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filter = expense.filter((i) => {
    return i.date.getFullYear().toString() === filteredYear;
  });

  // if(filter.length === 1){
  //   const  i = root().createElement()
  // }

  

  return (
    <div className="app">
      <div>
        {
          isLoading ? <button onClick={startbtn}>Add New Expenses</button> : <NewExpense onAddExpense={addExpenseHandler} />
        }
      </div>
      <ExpenseFilter
        selected={filteredYear}
        onchangeFilter={filterChangedHandler}
      />

      <div>
        {filter.length === 0 ? (
          <p>No expense found</p>
        ) : (
          filter.map((i) => <ExpenseItem key={i.id} expense={i} />)
        )}
      </div>

      <div>
      {filter.length === 1 ? (
          <p>Only single Expense here. Please add more..."</p>
        ) : (
          filter.map((i) => <ExpenseItem key={i.id} expense={i} />)
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".div"));
root.render(<AppLayout />);
