import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Updated from "./Updated";
import { useState } from "react";


const ExpenseItem = (props) => {
  const { expense } = props;
  const { title, amount, LocationOfExpenditure ,date } = expense;

  const [updatedAmount, setUpdatedAmount] = useState(amount);

  const handleAmountUpdate = (newAmount) => {
    setUpdatedAmount(newAmount);
  };

  

  return (
    <div className="expense-item">
      
      <ExpenseDate dates={date}/>
      <ExpenseDetails
        amount={updatedAmount}
        location={LocationOfExpenditure}
        title={title}
      />
      <Updated amount={updatedAmount} onAmountUpdate={handleAmountUpdate} />
    </div>
  );
};

export default ExpenseItem;
